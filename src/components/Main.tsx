import type { FC } from "react";

type Props = {
  activeNote:
    | {
        id: string;
        title: string;
        content: string;
        modDate: number;
      }
    | false;
};

export const Main: FC<Props> = (props) => {
  const { activeNote } = props;
  if (!activeNote) {
    return <div className="no-active-note">ノートを選択してください。</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};
