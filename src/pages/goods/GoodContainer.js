/**
 * @description 商品详情
 * @author ronffy
 * @Date 2020-12-01 17:40:08
 * @LastEditTime 2020-12-03 14:55:27
 * @LastEditors ronffy
 */
import { useRequest } from 'ahooks';
import { asyncDecrease, asyncIncrease } from "../../store/effects";
import Good from "../../components/Good";

const GoodContainer = ({
  id,
  name,
  count,
}) => {
  const {
    run: decrease,
    loading: loadingDecrease
  } = useRequest(asyncDecrease, {
    manual: true,
  });
  const {
    run: increase,
    loading: loadingIncrease
  } = useRequest(asyncIncrease, {
    manual: true,
  });

  return (
    <Good
      id={id}
      name={name}
      count={count}
      disabledDecrease={loadingDecrease || !count}
      disabledIncrease={loadingIncrease}
      onDecrease={decrease}
      onIncrease={increase}
    />
  );
}

export default GoodContainer;