import type { FC } from "react";

type Props = {
  onAddNote: () => void;
  notes: {
    id: string;
    title: string;
    content: string;
    modDate: number;
  }[];
  onDeleteNote: (id: string) => void;
  activeNote: string | undefined;
  setActiveNote: (id: string | undefined) => void;
};

export const Sidebar: FC<Props> = (props) => {
  const { onAddNote, notes, onDeleteNote, activeNote, setActiveNote } = props;
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => {
              setActiveNote(note.id);
            }}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              最後の修正日：
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};