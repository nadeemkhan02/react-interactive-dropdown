import "./chips.css"

export function Chip({ label, onDelete, chipStyle, closeStyle }) {
    return (
      <div className="chip" style={{...chipStyle}}>
        <span>{label}</span>
        <button className="closeButton" onClick={onDelete}>
          &#x2715; {/* Unicode for the cross (✕) */}
        </button>
      </div>
    );
  }