import { useCallback, useMemo, useRef, useState } from "react";
import { Animated } from "react-animated-css";
import useEventOnScroll from "../../hooks/useEventOnScroll";

function DefaltItemBox({ data, collapsed }) {
  return (
    <div className="item-box">
      <span className="item-title">{data.title}</span>
      <div className="item-expand-btn--outer">
        <div className={`item-expand-btn ${collapsed ? 'collapsed' : ''}`}></div>
      </div>
    </div>
  );
}

function Item({ data, ItemBox }) {
  const itemRef = useRef(null);
  const sublistRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    const sublistElement = sublistRef && sublistRef.current && sublistRef.current.children[0];
    const sublistHeight = (collapsed && sublistElement && sublistElement.offsetHeight) || 0;

    return (
      <li className="item wrapper clickable" ref={itemRef} onClick={onExpandBtnClick}>
        <Animated isVisible={isVisible} animationIn="fadeInLeft" animationInDuration={1200} animationOut="fadeOutLeft">
          {ItemBox ? <ItemBox data={data} collapsed={collapsed} /> : <DefaltItemBox data={data} collapsed={collapsed} />}
          {data.list ?
            <div className="item-sublist--outer" ref={sublistRef} style={{ height: sublistHeight }}>
              <ul className="item-sublist">
                {itemsSublist}
              </ul>
            </div>
            : null
          }
        </Animated>
      </li>
    )
  } else if (typeof data === 'string') {
    return (
      <li className="item wrapper" ref={itemRef}>
        <Animated isVisible={isVisible} animationIn="fadeInLeft" animationInDuration={1200} animationOut="fadeOutLeft">
          <span className="item-title">{data}</span>
        </Animated>
      </li>
    )
  }
  return null;
}

function ListBlock({ items, ItemBox }) {
  const renderedItems = useMemo(() => {
    return items.map((skillData, index) => {
      return <Item data={skillData} key={index} ItemBox={ItemBox} />
    });
  }, [items, ItemBox]);

  return <ul className="list-items">{renderedItems}</ul>;
}

export default ListBlock;
