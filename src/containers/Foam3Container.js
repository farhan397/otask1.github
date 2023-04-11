
import {connect} from 'react-redux'
<<<<<<< HEAD
import {addshiftinfo,removeduserinfo} from '../service/actions/actions'
=======
import {addshiftinfo} from '../service/actions/actions'
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19
import Page3component from '../Component/Page3component'


const mapStateToProps=state=>({
<<<<<<< HEAD
     data:state.condinformation,

})
const mapDispatchToProps=dispatch=>({
    addToshiftHandler:data=>dispatch(addshiftinfo(data)),
    clearuserinfo:data=>dispatch(removeduserinfo(data)),
    clearcondinfo:data=>dispatch(removeduserinfo(data))
=======
    //  data:state.userinformation,

})
const mapDispatchToProps=dispatch=>({
    addToshiftHandler:data=>dispatch(addshiftinfo(data))
>>>>>>> 367e02354208b21a8c2abe4e93927851a1be8d19

})
export default connect(mapStateToProps,mapDispatchToProps)(Page3component)
// export default Home;