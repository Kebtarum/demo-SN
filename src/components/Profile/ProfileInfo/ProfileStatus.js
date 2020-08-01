import React from 'react';
import s from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        }

        this.activateEditMode = this.activateEditMode.bind(this);
        this.deactivateEditMode = this.deactivateEditMode.bind(this);
    }

    activateEditMode(){
        this.setState({             ///////setState - ассихронный т.е. он не сразу выполняется, как и ajax запросы
            editMode: true,
        })
    }
    deactivateEditMode(){
        this.setState({             
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
            <div>
            {!this.state.editMode && 
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>

                </div>
            }
            {this.state.editMode && 
                <div>
            
                    <input autoFocus={true} onBlur={this.deactivateEditMode} 
                    onChange={this.onStatusChange} value={this.state.status}></input>

                </div>
            }
            </div>
            
        );
    }
}

export default ProfileStatus;