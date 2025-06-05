import type { FC } from "react";

type Props = {
  activeNote:
    | {
        id: string;
        title: string;
        content: string;
        modDate: number;
      }
    | undefined;
  onUpdateNote: (updatedNote: {
    id: string;
    title: string;
    content: string;
    modDate: number;
  }) => void;
};

export const Main: FC<Props> = (props) => {
  const { activeNote, onUpdateNote } = props;
  const onEditNote = (key: "title" | "content", value: string) => {
    if (!activeNote) return;
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };
  if (!activeNote) {
    return <div className="no-active-note">ノートを選択してください。</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id=""
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};
