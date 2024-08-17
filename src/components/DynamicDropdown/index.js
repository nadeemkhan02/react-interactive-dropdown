import { useCallback, useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import SELECT_CARET from "../../assets/arrowDownLightGrey.svg";
import "./dynamicSearch.css";

function InteractiveDropdown({
  selectionList = [],
  placeholder,
  labelKeys,
  valueKey,
  value = null,
  onChange = (e) => {},
  autoFormat = false,
  name,
  isRequired,
  label = null,
  isSearchable = true,
  isMultiSelect = false,
  withCheckBox = false,
  withChips = false,
  iconComponent = null,
  isDisabled = false,
  endAdornment = null,
  chipStyle,
  isServerSideSearch = false,
  onSearchQueryChange = (e) => {},
  menuWidth,
  isComponentOptions = false,
  onLastRowIntersect = () => {},
  isPagination = false,
}) {
  const [searchText, setSearchText] = useState("");
  const [selection, setSelection] = useState(value);
  const [selectOptions, setSelectOptions] = useState([]);
  const [multiSelection, setMultiSelection] = useState([]);
  const [displayOptions, setDisplayOptions] = useState([]);
  let [open, setOpen] = useState(false);

  const observer = useRef();

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("test-intersection");
        onLastRowIntersect();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  function useClickOutside(ref, onClickOutside) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }

  const wrapperRef = useRef("menu");
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    let array = [];
    if (autoFormat) {
      array = selectionList.map((tag) => {
        let label = [];
        labelKeys.map((w) => {
          label.push(tag[w]);
        });
        return { value: tag[valueKey], label: label.join(" ") };
      });
    } else {
      array = [...selectionList];
    }
    setSelectOptions(array);
    setDisplayOptions(array);
  }, [selectionList]);

  useEffect(() => {
    if (isMultiSelect) {
      setMultiSelection(value);
    } else {
      setSelection(value);
    }
  }, [selectionList, value]);

  const handleSelect = (e) => {
    onChange(e);
    setSelection(e);
    setSearchText("");
    setOpen(false);
  };

  const handleMultiSelect = (e) => {
    let MultiSelection = [...multiSelection];
    if (MultiSelection.indexOf(e) > -1) {
      MultiSelection.splice(MultiSelection.indexOf(e), 1);
    } else {
      MultiSelection.push(e);
    }
    setMultiSelection(MultiSelection);
    onChange(MultiSelection);
  };

  const handleMultiSelectDelete = (e) => {
    let MultiSelection = [...multiSelection];
    MultiSelection.splice(MultiSelection.indexOf(e), 1);
    setMultiSelection(MultiSelection);
    onChange(MultiSelection);
    setOpen(open);
  };

  return (
    <div style={{ padding: "5px" }}>
      {label && (
        <div htmlFor={name} required={isRequired} className="inputfield-label">
          {label}
        </div>
      )}
      <div
        id={name}
        style={{
          padding: "10px 10px 10px 10px",
          border: "1px solid #8e8d8d",
          borderRadius: "6px",
          display: "flex",
          minHeight: "35px",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          width: menuWidth ? menuWidth : "100%",
          pointerEvents: isDisabled ? "none" : "all",
          opacity: isDisabled ? 0.5 : 1,
        }}
        onClick={() => {
          setOpen(!open);
        }}
        ref={wrapperRef}
      >
        <div>
          {isMultiSelect && multiSelection?.length && !withChips > 0
            ? multiSelection.map((select, key) => (
                <>
                  <div
                    key={select.value}
                    className="chip"
                    style={{ ...chipStyle }}
                  >
                    <span>{select.label}</span>
                    <button
                      className="closeButton"
                      onClick={() => handleMultiSelectDelete(select)}
                    >
                      &#x2715; {/* Unicode for the cross (✕) */}
                    </button>
                  </div>
                </>
              ))
            : null}
        </div>
        <div>{selection ? selection.label : placeholder}</div>
        <div>
          <img
            src={SELECT_CARET}
            alt=""
            style={{
              transition: "all .2s ease",
            }}
          />
        </div>
      </div>
      {isMultiSelect ? renderMultiSelectMenu() : renderSelectMenu()}
      <div sx={{ mt: 1 }}>
        {isMultiSelect && multiSelection?.length && withChips && !open > 0
          ? multiSelection.map((select, key) => (
              <div key={select.value} className="chip" style={{ ...chipStyle }}>
                <span>{select.label}</span>
                <button
                  className="closeButton"
                  onClick={() => handleMultiSelectDelete(select)}
                >
                  &#x2715; {/* Unicode for the cross (✕) */}
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );

  function renderSelectMenu() {
    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
      const DisplayOptions = selectOptions
        .map((item) => {
          return item;
        })
        .filter((item) => item !== undefined);
      setDisplayOptions(DisplayOptions);
    };

    function renderOption(value) {
      if (selection?.value === value?.value) {
        return (
          <>
            {isComponentOptions ? (
              <div className="value-label">{value.html}</div>
            ) : (
              <div className="value-label">
                {value.label?.length <= 30
                  ? `${value?.label}`
                  : `${value?.label?.substring(0, 30)}...`}
              </div>
            )}
          </>
        );
      }
      return (
        <>
          {isComponentOptions ? (
            <div className="value-label">{value.component}</div>
          ) : (
            <div className="value-label">
              {value.label?.length <= 30
                ? `${value?.label}`
                : `${value?.label?.substring(0, 30)}...`}
            </div>
          )}
        </>
      );
    }

    return (
      <>
        {open && (
          <div // TODO : Menu ...
            sx={{ p: 0, mt: 0.7 }}
            keepMounted={true}
            ref={wrapperRef}
            style={{
              width: menuWidth ? menuWidth : "100%",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            className="main-menu-container"
          >
            {isSearchable && (
              <div className="menu-search-div" style={{ width: "100%" }}>
                <input
                  onChange={
                    isServerSideSearch
                      ? onSearchQueryChange
                      : handleSearchChange
                  }
                  placeholder="Search..."
                  value={searchText}
                  className="menu-search-input"
                />
              </div>
            )}
            <div className="menu-list-div" style={{ maxHeight: "200px" }}>
              <List
                style={{
                  scrollbarWidth: "thin",
                  textWrap: "pretty",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "5px",
                    height: "0px",
                  },
                }}
                itemCount={displayOptions?.length}
                itemSize={40}
                height={200}
                width={"100%"}
                className="menu-list"
                // ref={setLastElement}
              >
                {({ index, style }) => {
                  return (
                    <div
                      className="menu-div"
                      style={style}
                      ref={
                        isPagination
                          ? displayOptions?.length === index + 1
                            ? lastElementRef
                            : null
                          : null
                      }
                    >
                      <div
                        className={"styled-menu-div"}
                        onClick={() => handleSelect(displayOptions[index])}
                      >
                        {iconComponent && iconComponent(displayOptions[index])}
                        {renderOption(displayOptions[index])}
                        {endAdornment && endAdornment(displayOptions[index])}
                      </div>
                    </div>
                  );
                }}
              </List>
            </div>
          </div>
        )}
      </>
    );
  }

  function renderMultiSelectMenu() {
    function renderOption(value) {
      if (selection?.value === value?.value) {
        return (
          <div className="value-label">
            {isComponentOptions ? <>{value.component}</> : value.label}
          </div>
        );
      }
      return (
        <div className="value-label">
          {isComponentOptions ? <>{value.component}</> : value.label}
        </div>
      );
    }

    return (
      <>
        {open && (
          <div
            sx={{ p: 0, mt: 0.7 }}
            keepMounted={true}
            ref={wrapperRef}
            style={{
              width: menuWidth ? menuWidth : "100%",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            className="main-menu-container"
          >
            {isSearchable && (
              <div style={{ width: "100%" }} className="menu-search-div">
                <input
                  onChange={
                    isServerSideSearch
                      ? onSearchQueryChange
                      : (e) => {
                          setSearchText(e.target.value);
                          const DisplayOptions = selectOptions
                            .map((item) => {
                              if (
                                item?.label
                                  ?.toLowerCase()
                                  .includes(e.target.value?.toLowerCase())
                              ) {
                                return item;
                              }
                              return undefined;
                            })
                            .filter((item) => item !== undefined);
                          setDisplayOptions(DisplayOptions);
                        }
                  }
                  placeholder="Search..."
                  value={searchText}
                  className="menu-search-input"
                />
              </div>
            )}
            <div
              className="menu-container"
              style={{
                maxHeight: "250px",
                overflowY: "auto",
                margin: "10px 0px 10px 0px",
              }}
            >
              {displayOptions.length > 0 ? (
                displayOptions.map((item, index) => {
                  return (
                    <div
                      ref={
                        isPagination
                          ? displayOptions?.length === index + 1
                            ? lastElementRef
                            : null
                          : null
                      }
                      className="menu-div"
                      key={index}
                    >
                      {
                        <div
                          className={
                            multiSelection.indexOf(item) > -1
                              ? "selected-styled-menu-div"
                              : "styled-menu-div"
                          }
                          onClick={() => handleMultiSelect(item)}
                        >
                          {withCheckBox && (
                            <input
                              required={true}
                              type="checkbox"
                              checked={multiSelection.indexOf(item) > -1}
                              className="menu-checkbox"
                            />
                          )}
                          {renderOption(item)}
                        </div>
                      }
                    </div>
                  );
                })
              ) : (
                <div
                  className="no-option-div"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <span className="no-option-span">No Options</span>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default InteractiveDropdown;
