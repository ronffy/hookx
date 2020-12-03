/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:20:09
 * @LastEditTime 2020-12-03 16:29:21
 * @LastEditors ronffy
 */
import { useHistory } from 'react-router-dom'
import Button from '../components/Button';
import { connect } from 'react-redux';

const Total = ({ list }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/goods');
  }
  return (
    <div className="total">
      <Button onClick={handleClick}>跳转到明细页</Button>
      <div>
        商品种类数：{list.length}
      </div>
      <div>
        商品总数量：{getCountByList(list)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
})

// export default Total
export default connect(mapStateToProps)(Total)

// 计算总数量
function getCountByList(list) {
  let total = 0;
  for (const { count } of list) {
    total += count;
  }
  return total;
}
