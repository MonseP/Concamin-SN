import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUpContainer from './SignUpContainer';

function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps() {
    return {

    }
}

const SignUpPage = connect(mapStateToProps,mapDispatchToProps)(SignUpContainer);

export default SignUpPage;