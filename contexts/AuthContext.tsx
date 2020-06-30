import React, {Component, createContext, Context} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IProps {}

interface IState {
    token: string|null
}

interface IAuthContext {
    token: string|null,
    setToken(token:string): Promise<boolean>,
    getToken(): Promise<string|null>
}

export const AuthContext = createContext<IAuthContext>({
    token:null,
    setToken:async (token: string): Promise<boolean>=>{return false},
    getToken:async (): Promise<string|null>=>{return null}
});

export class AuthContextProvider extends Component<IProps, IState> {
    constructor(props: any){
        super(props);

        this.state = {
            token:null
        }

        this.getToken = this.getToken.bind(this);
        this.setToken = this.setToken.bind(this);
    }

    componentDidMount(){
        AsyncStorage.getItem("chatcord_login_token")
        .then(val=>{
            console.log(val);
            this.setState({token:val})
        })
        .catch(err=>console.log(err))
    }

    async getToken(): Promise<string|null>{
        try {
            const token: string|null = await AsyncStorage.getItem("chatcord_login_token");
            this.setState({token:token})
            return token;
        } catch (error) {
            console.log(error);
            return null;
        } 
    }

    async setToken(token: string): Promise<boolean>{
        try {
            await AsyncStorage.setItem("chatcord_login_token", token);
            this.setState({token:token})
            return true;
        } catch (error) {
            console.log(error);
            return false;
        } 
    }

    render() {
        return(
            <AuthContext.Provider value={{token:this.state.token, setToken: this.setToken, getToken: this.getToken}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}