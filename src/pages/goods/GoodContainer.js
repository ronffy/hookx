/**
 * @description 商品详情
 * @author ronffy
 * @Date 2020-12-01 17:40:08
 * @LastEditTime 2020-12-03 17:52:56
 * @LastEditors ronffy
 */
import { useRequest } from 'ahooks';
import { connect } from 'react-redux'
import { asyncDecrease, asyncIncrease } from "../../store/effects";
import Good from "../../components/Good";

const GoodContainer = ({
  id,
  name,
  count,
  onAsyncIncrease,
  onAsyncDecrease,
}) => {

  const {
    run: increase,
    loading: loadingIncrease
  } = useRequest(onAsyncIncrease, {
    manual: true,
  });
  const {
    run: decrease,
    loading: loadingDecrease
  } = useRequest(onAsyncDecrease, {
    manual: true,
  });

  return (
    <Good
      id={id}
      name={name}
      count={count}
      disabledIncrease={loadingIncrease}
      disabledDecrease={loadingDecrease || !count}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
}

const mapStateToProps = () => ({})

const mapDispathToProps = (dispatch) => ({
  async onAsyncIncrease(id, count) {
    return dispatch(asyncIncrease(id, count));
  },
  async onAsyncDecrease(id, count) {
    return dispatch(asyncDecrease(id, count));
  },
})

export default connect(mapStateToProps, mapDispathToProps)(GoodContainer);