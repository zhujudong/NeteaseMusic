import React, { FC, ChangeEvent, useState, useRef } from 'react';

import './index.less';

const Search: FC<{}> = () => {
  const [inputVal, setInput] = useState<string>('');
  const [tipVisible, setTipVisible] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="search-wrapper">
      <div className="search-icon"></div>
      <div className="input-wrapper">
        <input
          type="text"
          value={inputVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onBlur={() => setTipVisible(true)}
          ref={inputRef}
        />
        {tipVisible && !inputVal ? (
          <label
            onClick={() => {
              setTipVisible(false);
              inputRef.current && inputRef.current.focus();
            }}
          >
            音乐/视频/电台/用户
          </label>
        ) : null}
      </div>
    </div>
  );
};
export default Search;
