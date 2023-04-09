import { useCallback, useMemo, useRef, useState } from "react";
import useEventOnScroll from "../../hooks/useEventOnScroll";
import { TypeAnimation } from "react-type-animation";

function Item({ data }) {
  const itemRef = useRef(null);
  const sublistRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEventOnScroll(itemRef, () => {
    setIsVisible(true);
  }, window.innerHeight);

  const onExpandBtnClick = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const itemsSublist = useMemo(() => {
    return data.list && data.list.map((subitem, index) => {
      return (
        <li key={index}>
          <span className="subitem-title">{subitem}</span>
        </li>
      );
    });
  }, [data]);

  if (typeof data === 'object') {
    const sublistElement = sublistRef.current && sublistRef.current.children[0];
    const sublistHeight = (collapsed && sublistElement.offsetHeight) || 0;

    return (
      <li className="item wrapper clickable" ref={itemRef} onClick={onExpandBtnClick}>
        {isVisible ? <>
          <div className="item-box">
            <TypeAnimation className="item-title"
              sequence={[
                data.title
              ]}
              wrapper="span"
              cursor={false}
              speed={{ type: "keyStrokeDelayInMs", value: 15 }}
            />
            <div className="item-expand-btn--outer">
              <div className={`item-expand-btn ${collapsed ? 'collapsed' : ''}`}></div>
            </div>
          </div>
          <div className="item-sublist--outer" ref={sublistRef} style={{ height: sublistHeight }}>
            <ul className="item-sublist">
              {itemsSublist}
            </ul>
          </div>
        </> : null}
      </li>
    )
  } else if (typeof data === 'string') {
    return (
      <li className="item wrapper" ref={itemRef}>
        {isVisible ? <TypeAnimation className="item-title"
          sequence={[
            data
          ]}
          wrapper="span"
          cursor={false}
          speed={{ type: "keyStrokeDelayInMs", value: 15 }}
        /> : null}
      </li>
    )
  }
  return null;
}

function ListBlock({items}) {
  const renderedItems = useMemo(() => {
    return items.map((skillData, index) => {
      return <Item data={skillData} key={index} is />
    });
  }, [items]);

  return <ul className="list-items">{renderedItems}</ul>;
}

export default ListBlock;
