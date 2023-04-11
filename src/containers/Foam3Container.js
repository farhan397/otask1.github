
import {connect} from 'react-redux'
import {addshiftinfo,removeduserinfo} from '../service/actions/actions'
import Page3component from '../Component/Page3component'


const mapStateToProps=state=>({
     data:state.condinformation,

})
const mapDispatchToProps=dispatch=>({
    addToshiftHandler:data=>dispatch(addshiftinfo(data)),
    clearuserinfo:data=>dispatch(removeduserinfo(data)),
    clearcondinfo:data=>dispatch(removeduserinfo(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Page3component)
// export default Home;