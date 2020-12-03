/**
 * @description 商品详情
 * @author ronffy
 * @Date 2020-12-01 17:40:08
 * @LastEditTime 2020-12-03 14:59:04
 * @LastEditors ronffy
 */
const Good = ({
  id,
  name,
  count,
  disabledDecrease,
  disabledIncrease,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className="detail-list-item">
      <span>{name}</span>
      <span>
        <button
          disabled={disabledDecrease}
          onClick={(e) => onDecrease(id, -1, e)}
        >-</button>
        {count}
        <button
          disabled={disabledIncrease}
          onClick={(e) => onIncrease(id, 1, e)}
        >+</button>
      </span>
    </div>
  );
}

export default Good;