import React, { Component ,Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
//import axios from 'axios'


import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import TodoItem from '../components/TodoItem'

import {connect} from 'react-redux'
import {getTodos} from '../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
})

class home extends Component {

    componentDidMount(){
        const {todos} = this.props.data
        //get the todo items
        if(todos)
        this.props.getTodos()
    }
    
    render() {
        const {todos, loading} = this.props.data

        let todoMarkup = !loading ? (
           todos.map(todo => <TodoItem key={todo.todoId} todo = {todo}/>)
        ) : (
            <CircularProgress color="secondary" />
        )

        return (
            <Fragment>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        {todoMarkup}
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        side bar
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps, {getTodos})(withStyles(styles)(home))