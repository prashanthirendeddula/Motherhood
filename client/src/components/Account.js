import React from "react"
import { connect } from "react-redux"
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Account(props){
    return(
        <div>
            <Layout>
    <Sider>
        </Sider>
        <Content>
        <h1>account details</h1>

        <h1>{props.user.username}</h1>
   <h1>{props.user.email}</h1>

        </Content>

                
   </Layout>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Account)