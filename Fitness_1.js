import * as React from 'react';
import {
    Text, View, ScrollView, TouchableOpacity,
    ImageBackground, TextInput, Image,
    Modal, SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Fitness_1 extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            login: true,
            sec: true,
            login_visible:true,
            sign_visible:false,
            home_visiable: false,
            activities: [
                {
                    id: 30,
                    activity_name: "EXERCIZES",
                    activity_num: 8,
                },
                {
                    id: 31,
                    activity_name: "CALORIES",
                    activity_num: 30,
                },
                {
                    id: 32,
                    activity_name: "BPM",
                    activity_num: 88.3,
                },
            ],
            icons: [
                {
                    id: 1,
                    name: 'Home',
                    icon: 'home',
                    click: true,
                    visible: true,
                },
                {
                    id: 2,
                    name: 'Workouts',
                    icon: 'activity',
                    click: false,
                    visible: false
                },
                {
                    id: 3,
                    name: 'Settings',
                    icon: 'settings',
                    click: false,
                    visible: false,
                },
                {
                    id: 4,
                    name: 'Profile',
                    icon: 'user',
                    click: false,
                    visible: false,
                },
            ],
            icon: [{
                id: 1,
                name: 'Home',
                icon: 'home',
                click: true,
                visible: true,
            },],
            login_user_name: "",           
            login_user_password: "",
            sign_email_address: "",
            sign_user_name:"",
            sign_user_password:"",
            error_login: "",
            error_signup: "",
            warm_visible: false,
            ex: [
                {
                    num: 23,
                    lose: 'Calories'
                },
                {
                    num: 5,
                    lose: 'Minutes'
                },
                {
                    num: 9,
                    lose: 'Excercsise'
                },
            ],
            type: [
                {
                    id: 1,
                    img: 'https://i.pinimg.com/564x/dc/84/ea/dc84ea2698584f69e2f719833f8f0b70.jpg',
                    ex_type: 'Fire Hydrants',
                    time: '25 s',
                    eight: 0,

                },
                {
                    id: 2,
                    img: 'https://i.pinimg.com/564x/db/0a/52/db0a52989e7cb61671d9815ceb5c4771.jpg',
                    ex_type: 'Shuolder Press',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 3,
                    img: 'https://i.pinimg.com/564x/dc/84/ea/dc84ea2698584f69e2f719833f8f0b70.jpg',
                    ex_type: 'Fire Hydrants',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 4,
                    img: 'https://i.pinimg.com/564x/db/0a/52/db0a52989e7cb61671d9815ceb5c4771.jpg',
                    ex_type: 'Shuolder Press',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 5,
                    img: 'https://i.pinimg.com/564x/dc/84/ea/dc84ea2698584f69e2f719833f8f0b70.jpg',
                    ex_type: 'Fire Hydrants',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 6,
                    img: 'https://i.pinimg.com/564x/db/0a/52/db0a52989e7cb61671d9815ceb5c4771.jpg',
                    ex_type: 'shuolder press',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 7,
                    img: 'https://i.pinimg.com/564x/dc/84/ea/dc84ea2698584f69e2f719833f8f0b70.jpg',
                    ex_type: 'fire hydrants',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 8,
                    img: 'https://i.pinimg.com/564x/db/0a/52/db0a52989e7cb61671d9815ceb5c4771.jpg',
                    ex_type: 'shuolder press',
                    time: '25 s',
                    eight: 0,
                },
                {
                    id: 9,
                    img: 'https://i.pinimg.com/564x/db/0a/52/db0a52989e7cb61671d9815ceb5c4771.jpg',
                    ex_type: 'shuolder press',
                    time: '25 s',
                    eight: 0,
                }

            ],
            modalvisible: false,
            modelshow: [],
            eight: 0,
            modalvisible2: false,
            timer: null,
            counter: 0,
            custom_visible: false,
            add_new_workout_visible: false,
            add_exercise_visible: false,
            new_workout_visible: false,
            workout: [
                {
                    id: 10,
                    title: "My Workouts",
                    number_of_exer: 5,
                    time_of_exer: 1,
                    togg: false,
                },
                {
                    id: 11,
                    title: "My Workouts",
                    number_of_exer: 6,
                    time_of_exer: 1,
                    togg: false,
                },
                {
                    id: 12,
                    title: "My Workouts",
                    number_of_exer: 5,
                    time_of_exer: 3,
                    togg: false,
                },
                {
                    id: 13,
                    title: "My Workouts",
                    number_of_exer: 4,
                    time_of_exer: 2,
                    togg: false,
                },
            ],
            levels: [
                {
                    id: 5,
                    level_name: 'Easy',
                    press: false
                },
                {
                    id: 6,
                    level_name: 'Medium',
                    press: false
                },
                {
                    id: 5,
                    level_name: 'Hard',
                    press: false
                },
            ],
            exersizes: [
                {
                    id: 1,
                    image: require("../img/undraw_pilates_gpdb.png"),
                    img_name: "pilates_gpdb",
                    time: 25,
                    cheked: false
                },
                {
                    id: 2,
                    image: require("../img/undraw_Stability_ball_b4ia.png"),
                    img_name: "Stability_ball",
                    time: 20,
                    cheked: false
                },
                {
                    id: 3,
                    image: require("../img/undraw_personal_trainer_ote3.png"),
                    img_name: "personal_trainer",
                    time: 30,
                    cheked: false
                },
                {
                    id: 4,
                    image: require("../img/undraw_indoor_bike_pwa4.png"),
                    img_name: "indoor_bike",
                    time: 45,
                    cheked: false
                },
                {
                    id: 5,
                    image: require("../img/undraw_workout_gcgu.png"),
                    img_name: "workout_gcgu",
                    time: 25,
                    cheked: false
                },
                {
                    id: 6,
                    image: require("../img/undraw_working_out_6psf.png"),
                    img_name: "workingout",
                    time: 20,
                    cheked: false
                },
            ],

        };
    }
    change() {
        let secu = this.state.sec;
        this.setState({ sec: !secu });
    }
    changeColor(index) {
        let choices = this.state.icons
        for (let i = 0; i < choices.length; i++) {
            choices[i].click = false
            choices[i].visible = false
        }
        choices[index].click = true
        choices[index].visible = true
        this.setState({
            icons: choices,
            icon: choices[index].visible
        })
    }
    loginFun() {
        let name = this.state.login_user_name.trim()
        let pass = this.state.login_user_password
        let errorLogin = ""
        let visible = this.state.login_visible

        if (name == "" && pass == "") {
            errorLogin = "Invalid login"
            visible = true
        } else if (name == "" || pass == "") {
            errorLogin = "Please enter the empty.."
            visible = true
        } else {
            visible = false
            this.state.home_visiable = true
        }

        this.setState({
            error_login: errorLogin,
            login_user_name: name,
            login_user_password: pass,
            login_visible: visible,

        })
    }

    signFun() {
        let name = this.state.sign_user_name.trim()
        let pass = this.state.sign_user_password
        let email = this.state.sign_email_address.trim()
        let errorSignup = ""
        let visible = this.state.sign_visible
        if (name == "" && pass == "" && email == "") {
            errorSignup = "Invalid login"
            visible = true
        } else if (name == "" || pass == "" || email == "") {
            errorSignup = "Please enter the empty.."
            visible = true
        } else {
            visible = false
            this.state.home_visiable = true
        }

        this.setState({
            error_signup: errorSignup,
          sign_user_name: name,
           sign_user_password: pass,
           sign_email_address: email,
            sign_visible: visible,
        })
    }

    checkFun(index) {
        let exersize = this.state.exersizes
        exersize[index].cheked = !exersize[index].cheked
        this.setState({ exersizes: exersize })
    }

    toggFun(index) {
        let work = this.state.workout
        work[index].togg = !work[index].togg
        this.setState({ workout: work })
    }
    changeLevels(level_index) {
        let toggles = this.state.levels
        for (let i = 0; i < toggles.length; i++) {
            toggles[i].press = false
        }
        toggles[level_index].press = true
        this.setState({ levels: toggles })
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    tick = () => {
        if (this.state.modalvisible == true) {
            this.setState({
                counter: this.state.counter + 1
            });
        } else {
            this.setState({
                counter: 0
            });
        }
        if (this.state.counter == 25) {
            this.setState({ counter: 25, modalvisible2: true })
        }

    }

    render() {
        return (
            <>
                {/* login modal */}
                <Modal
                    visible={this.state.login_visible}
                    onRequestClose={() => {
                        this.setState({ login_visible: false });
                    }}>
                    <ImageBackground
                        source={{
                            uri:
                                'https://scontent.fcai3-2.fna.fbcdn.net/v/t39.30808-6/217407761_1529858120679093_5630527918646307474_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=mCXd8ivg8jAAX_sU3KD&tn=pGfCOET8z_hm3408&_nc_ht=scontent.fcai3-2.fna&oh=14b7911f52396e37847bcb02eda1b23f&oe=60F07C35',
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ScrollView>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '98%',
                                    height: 490,
                                    alignSelf: 'center',
                                    backgroundColor: '#EAF2FC',
                                    borderRadius: 10,
                                    marginTop: 190,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 25,
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 80,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottomWidth: 1.5,
                                            marginRight: 10,
                                            borderBottomColor: this.state.login ? '#fe2b5f' : '#bbb',
                                        }}
                                        onPress={() => {
                                            this.setState({ login: true, login_visible: true, sign_visible: false });
                                        }}>
                                        <Text
                                            style={{
                                                color: this.state.login ? '#fe2b5f' : '#bbb',
                                            }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 80,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottomWidth: 1.5,
                                            borderBottomColor: this.state.login ? '#bbb' : '#fe2b5f',
                                        }}
                                        onPress={() => {
                                            this.setState({ login: false, login_visible: false, sign_visible: true  });
                                        }}>
                                        <Text
                                            style={{
                                                color: this.state.login ? '#bbb':'#fe2b5f'  ,
                                            }}>
                                            Signup
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        paddingLeft: 10,
                                        color: '#000',
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}>
                                    <TextInput
                                        placeholder={'User name'}
                                        placeholderTextColor={'#bbb'}
                                        style={{
                                            padding: 10,

                                        }}
                                        value={this.state.login_user_name}
                                        onChangeText={(value) => {
                                            this.setState({ login_user_name: value })
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}>
                                    <TextInput
                                        placeholder={'Passward'}
                                        placeholderTextColor={'#bbb'}
                                        style={{
                                            width: '80%',
                                            height: 50,
                                            padding: 10,
                                            justifyContent: 'center',

                                        }}
                                        secureTextEntry={this.state.sec}
                                        value={this.state.login_user_password}
                                        onChangeText={(value) => {
                                            this.setState({ login_user_password: value })
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={{
                                            width: '15%',
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onPress={() => {
                                            this.change();
                                        }}>
                                        <Icon
                                            name={this.state.sec ? 'eye-slash' : 'eye'}
                                            color={'#bbb'}
                                            style={{ padding: 10 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        marginBottom: 15,
                                        width: '85%',
                                        height: 50,
                                        marginTop: -8,
                                    }}>
                                    <TouchableOpacity>
                                        <Text
                                            style={{
                                                color: '#fe2b5f',
                                                textAlign: 'right',
                                                fontSize: 12,
                                            }}>
                                            Forgot Passward?
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{
                                    color: "#f00", fontSize: 10,
                                    textAlign: "center", marginTop: -10,
                                }}>{this.state.error_login}</Text>
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 15,
                                        marginTop: 5,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fe2b5f',
                                         shadowColor: "#000", 
                                         shadowColor: "#000", 
                                         shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}
                                    onPress={() => {
                                        this.loginFun()
                                    }}>

                                    <Text style={{ color: '#fff', fontSize: 15 }}>Login...</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#bbb' }}>Don't have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ sign_visible: true, login_visible: false })
                                        }}
                                    >
                                        <Text style={{ color: '#fe2b5f', marginLeft: 8 }}>
                                            Signup
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </Modal>


                {/* signup modal */}
                <Modal
                    visible={this.state.sign_visible}
                    onRequestClose={() => {
                        this.setState({ sign_visible: false });
                    }}>
                    <ImageBackground
                        source={{
                            uri:
                                'https://scontent.fcai3-2.fna.fbcdn.net/v/t39.30808-6/217611979_1529858130679092_106262026705535646_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=rqvdn3cgKbIAX8R6fSq&_nc_ht=scontent.fcai3-2.fna&oh=770fb00fc29f649d7f53fcd4d2b1c726&oe=60F0857F',
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ScrollView>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '98%',
                                    height: 470,
                                    alignSelf: 'center',
                                    backgroundColor: '#EAF2FC',
                                    borderRadius: 10,
                                    marginTop: 150,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 25,
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 80,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottomWidth: 1.5,
                                            marginRight: 10,
                                            borderBottomColor: this.state.login ? '#fe2b5f' : '#bbb',
                                        }}
                                        onPress={() => {
                                            this.setState({ login: true, login_visible: true, sign_visible: false });
                                        }}>
                                        <Text
                                            style={{
                                                color: this.state.login ? '#fe2b5f' : '#bbb',
                                            }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 80,
                                            height: 40,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottomWidth: 1.5,
                                            borderBottomColor: this.state.login ? '#bbb' : '#fe2b5f',
                                           
                                        }}
                                        onPress={() => {
                                            this.setState({ login: false,
                                                 sign_visible: true, 
                                                 login_visible: false });
                                        }}>
                                        <Text
                                            style={{
                                                color: this.state.login ? '#bbb' : '#fe2b5f',
                                            }}>
                                            Signup
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        paddingLeft: 10,
                                        color: '#000',
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}>
                                    <TextInput
                                        placeholder={'User name'}
                                        placeholderTextColor={'#bbb'}
                                        style={{
                                            padding: 10
                                        }}
                                        value={this.state.sign_user_name}
                                        onChangeText={(value) => {
                                            this.setState({ sign_user_name: value })
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,

                                    }}>
                                    <TextInput
                                        placeholder={'Passward'}
                                        placeholderTextColor={'#bbb'}
                                        style={{
                                            width: '80%',
                                            height: 50,
                                            padding: 10,
                                            justifyContent: 'center',
                                        }}
                                        secureTextEntry={this.state.sec}
                                        value={this.state.sign_user_password}
                                        onChangeText={(value) => {
                                            this.setState({ sign_user_password: value })
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={{
                                            width: '15%',
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onPress={() => {
                                            this.change();
                                        }}>
                                        <Icon
                                            name={this.state.sec ? 'eye-slash' : 'eye'}
                                            color={'#bbb'}
                                            style={{ padding: 10 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        paddingLeft: 10,
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}>
                                    <TextInput
                                        placeholder={'Email'}
                                        placeholderTextColor={'#bbb'}
                                        style={{
                                            padding: 10,
                                        }}
                                        value={this.state.sign_email_address}
                                        onChangeText={(value) => {
                                            this.setState({ sign_email_address: value })
                                        }}
                                    />
                                </View>

                                <Text style={{
                                    color: "#f00", fontSize: 10,
                                    textAlign: "center", marginTop: -10,
                                }}>{this.state.error_signup}</Text>

                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 15,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        width: '85%',
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#fe2b5f',
                                        shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 7,
                                    }}
                                    onPress={() => {
                                        this.signFun()
                                    }}
                                >
                                    <Text style={{ color: '#fff', fontSize: 15 }}>Sign Up</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#bbb' }}>
                                        Already have an account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ login_visible: true })
                                        }}
                                    >
                                        <Text style={{ color: '#fe2b5f', marginLeft: 8 }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </Modal>





                {this.state.icons.map((icn, icn_index) => (
                    <View>
                        {icn.name == "Home" ? (
                            //  {/* home modal */}
                            <Modal visible={this.state.home_visiable}
                                onRequestClose={() => { this.setState({ home_visiable: false,login_visible:true }) }}
                                animationType="slide">
                                <>
                                    <View style={{ flex: 1, backgroundColor: "#EAF2FC", justifyContent: "center" }} >
                                        <Text style={{ color: "#FC4871", fontSize: 15, marginLeft: 15, marginTop: 50 }}>Hello!</Text>
                                        <View style={{
                                            width: "100%", height: 50, justifyContent: "space-between", flexDirection: "row",
                                            paddingHorizontal: 15, marginTop: 10
                                        }}>
                                            <Text style={{ fontSize: 23, fontWeight: "bold" }}>Find A
                                                <Text style={{ fontWeight: "bold", fontSize: 23, color: "#FC4871" }}> Challange</Text></Text>
                                            <TouchableOpacity style={{ width: 50, justifyContent: "center", alignItems: "center" }}>
                                                <Icon name="search" style={{ fontWeight: "bold", fontSize: 23, color: "#FC4871", marginTop: -5 }} />
                                            </TouchableOpacity>
                                        </View>


                                        <View style={{ width: "100%", height: 240 }}>
                                            <Image source={{ uri: "https://i.pinimg.com/originals/70/f0/25/70f02540720fd57a7927245c8e6d5587.jpg" }}
                                                style={{ width: "95%", height: 230, alignSelf: "center" }}
                                            />
                                        </View>

                                        <View style={{
                                            width: "100%", height: 40, marginTop: 10, flexDirection: "row",
                                            justifyContent: "space-between", paddingHorizontal: 15, alignItems: "center"
                                        }}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Today's Activity</Text>
                                            <TouchableOpacity style={{ width: 85, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text style={{ color: "#FC4871", fontSize: 15, marginLeft: 15, marginRight: 2 }}>Details</Text>
                                                <Icon name="angle-right" style={{ fontSize: 18, marginLeft: 5, marginRight: 6, marginTop: 2 }} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            width: "100%", height: 80, marginTop: 15, flexDirection: "row",
                                            justifyContent: "space-between", paddingHorizontal: 15
                                        }}>
                                            {this.state.activities.map((active, active_index) => (
                                                <TouchableOpacity style={{
                                                    width: 120, height: "100%", justifyContent: "center", borderRadius: 10
                                                    , paddingHorizontal: 8, backgroundColor: "#EAF2FC",
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 7,
                                                    },
                                                    shadowOpacity: 0.41,
                                                    shadowRadius: 9.11,

                                                    elevation: 14,
                                                }}>
                                                    <Text style={{ fontSize: 13, color: "#aaa", textAlign: "center", textAlign: "left", paddingLeft: 10 }}>{active.activity_name}</Text>
                                                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", marginLeft: 10 }}>{active.activity_num}</Text>
                                                </TouchableOpacity>
                                            ))}


                                        </View>

                                        <View style={{
                                            width: "100%", height: 40, marginTop: 15, flexDirection: "row",
                                            justifyContent: "space-between", paddingHorizontal: 15, alignItems: "center"
                                        }}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Today's Activity</Text>
                                            <TouchableOpacity style={{ width: 85, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text style={{ color: "#FC4871", fontSize: 15, marginLeft: 15, marginRight: 2 }}>Details</Text>
                                                <Icon name="angle-right" style={{ fontSize: 18, marginLeft: 5, marginRight: 6, marginTop: 2 }} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            width: "100%", height: 90, marginTop: 10, justifyContent: "space-between",
                                        }}>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                <View style={{
                                                    flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 15
                                                }}>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>MON</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>06</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>SUN</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>07</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>SAT</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>06</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>FRI</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>05</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>THR</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>04</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center", marginRight: 20
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>WED</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>03</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{
                                                        width: 75, height: "95%", alignItems: "center", justifyContent: "center"
                                                        , paddingHorizontal: 8, backgroundColor: "#EAF2FC", borderRadius: 5,
                                                        shadowOffset: {
                                                            width: 0, height: 2
                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                    }}>
                                                        <Text style={{ fontSize: 12, color: "#aaa" }}>TUE</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#FC4871", textAlign: "left" }}>02</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </ScrollView>
                                        </View>



                                        <View style={{
                                            alignSelf: 'center',
                                            alignItems: 'center', justifyContent: 'space-between',
                                            width: '90%', flexDirection: 'row', marginBottom: 15, marginTop: 80,
                                            backgroundColor: "#EAF2FC"
                                        }}>
                                            {this.state.icons.map((buttons, buttons_index) => (
                                                <TouchableOpacity
                                                    onPress={
                                                        () => {
                                                            this.changeColor(buttons_index)
                                                        }
                                                    }
                                                    style={{
                                                        width: 75, height: 75, borderRadius: 8,
                                                        //shadowColor: "#FCFCFC",
                                                        shadowOffset: { width: 0, height: 2, },
                                                        shadowOpacity: 0.01, shadowRadius: 1.84,
                                                        elevation: 4,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        // backgroundColor: "#eee",
                                                        backgroundColor: "#EAF2FC",
                                                        shadowColor: "#000",
                                                    }}>
                                                    <Feather name={buttons.icon} size={18}
                                                        color={buttons.click ? '#fe2b5f' : '#92969d'} />
                                                    <Text style={{
                                                        fontSize: 11,
                                                        color: buttons.click ? '#fe2b5f' : '#92969d', fontWeight: 'bold', marginTop: 5
                                                    }}>{buttons.name}</Text>
                                                </TouchableOpacity>
                                            ))}

                                        </View>
                                    </View>
                                </>
                            </Modal>
                        ) :
                            <View>
                                {icn.name == "Workouts" ? (
                                    //    workout modal
                                    <Modal visible={icn.visible}
                                    // onRequestClose={() => {
                                    //     this.setState({
                                    //          home_visiable: !this.state.home_visiable,
                                    //     workout_visiable:!this.state.workout_visiable })
                                    // }}
                                    >
                                        <View style={{ flex: 1, backgroundColor: "#EAF2FC", justifyContent: "center" }} >
                                            <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginTop: 25, marginBottom: 10, }}>Start
                                                <Text style={{ fontWeight: "bold", fontSize: 30, color: "#FC4871", marginTop: 25, marginBottom: 10 }}> Workout</Text></Text>

                                            <View style={{
                                                flex: .81, marginTop: 20, flexWrap: "wrap", flexDirection: "row",
                                                paddingHorizontal: 20, justifyContent: "space-between", marginBottom: 50
                                            }}>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 20,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}>
                                                    {/* <Icon name="shoe-prints" style={{ fontSize: 20, color: "#FC4871", }} /> */}
                                                    <Image source={{ uri: "https://scontent.fcai3-1.fna.fbcdn.net/v/t39.30808-6/215924247_1531703993827839_2631165724742463512_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=guMX7P5EoQkAX_qVMQO&_nc_oc=AQnrGLkvyt77BdH1AG0l061V1DNileB7DVwn89QNpp2_hrvEdsHRXbg6aThDduyaaC8&_nc_ht=scontent.fcai3-1.fna&oh=24dd3d20bbe457e4b3a1dadb02bc054d&oe=60F4750C" }}
                                                        style={{ width: 110, height: 60 }} />
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 5 }}>Steps</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 20,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}
                                                    onPress={() => {
                                                        this.setState({ warm_visible: true })
                                                    }}
                                                >
                                                    <Image source={{ uri: "https://scontent.fcai3-2.fna.fbcdn.net/v/t39.30808-6/218325486_1531703980494507_1487764471690824442_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=-bGDbs52w0UAX90ZN9H&_nc_ht=scontent.fcai3-2.fna&oh=353ebf08994d17f996a8292f164354a6&oe=60F3DAB6" }}
                                                        style={{ width: 110, height: 60 }} />
                                                    {/* <Icon name="hot-tub" style={{ fontSize: 30, color: "#FC4871", }} /> */}
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 5 }}>Warm UP</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 25,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}>
                                                    <MaterialCommunityIcons name="run-fast" style={{ fontSize: 35, color: "#FC4871", }} />
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 10 }}>Running</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 25,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}>
                                                    <Ionicons name="bicycle" style={{ fontSize: 35, color: "#FC4871", }} />
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 5 }}>Cycling</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 25,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}>
                                                    <Ionicons name="barbell" style={{ fontSize: 35, color: "#FC4871", }} />
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 5 }}>Gym</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: 180, height: 150, alignItems: "center", marginTop: 25,
                                                    justifyContent: "center", backgroundColor: "#fff", borderRadius: 5,
                                                    shadowOffset: {
                                                        width: 0, height: 2
                                                    }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5
                                                }}>
                                                    {/* <Icon name="self_improvement" style={{ fontSize: 30, color: "#FC4871", }} /> */}
                                                    <Image source={{ uri: "https://scontent.fcai3-2.fna.fbcdn.net/v/t39.30808-6/217297264_1531704010494504_1254111992070859406_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=nnAk2QgXPtYAX_fe3XM&_nc_oc=AQmaDLr7e6L358Vfgus5fSspX57dLsdfIju-EIB0h3sFMeSfQbs_7r1SRQPYkh4Dt-E&_nc_ht=scontent.fcai3-2.fna&oh=58e24a37b5b85168096f4eeee028b770&oe=60F3134A" }}
                                                        style={{ width: 110, height: 60 }} />
                                                    <Text style={{ fontSize: 16, color: "#FC4871", marginTop: 5 }}>Yoga</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <TouchableOpacity
                                                onPress={() => { this.setState({ custom_visible: true }) }}
                                                style={{
                                                    width: 50, height: 50, borderRadius: 25, backgroundColor: "#FC4871",
                                                    alignSelf: "flex-end", alignItems: "center", justifyContent: "center", marginRight: 15,
                                                    shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 6,
                                                    },
                                                    shadowOpacity: 0.39,
                                                    shadowRadius: 8.30,
                                                    elevation: 13,
                                                }}>
                                                <MaterialCommunityIcons name="pencil-plus-outline" style={{ fontSize: 18, color: "#fff", textAlign: "center" }} />
                                            </TouchableOpacity>


                                            <View style={{
                                                flex: .1, marginTop: 30, flexDirection: "row",
                                                justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center"
                                            }}>
                                                {this.state.icons.map((buttons, buttons_index) => (
                                                    <TouchableOpacity
                                                        onPress={
                                                            () => {
                                                                this.changeColor(buttons_index)
                                                            }
                                                        }
                                                        style={{
                                                            width: 75, height: 75, borderRadius: 8,
                                                            shadowOffset: { width: 0, height: 2, },
                                                            shadowOpacity: 0.01, shadowRadius: 1.84,
                                                            elevation: 4,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: "#EAF2FC",
                                                            shadowColor: "#000",
                                                        }}>
                                                        <Feather name={buttons.icon} size={18}
                                                            color={buttons.click ? '#fe2b5f' : '#92969d'} />
                                                        <Text style={{
                                                            fontSize: 11,
                                                            color: buttons.click ? '#fe2b5f' : '#92969d', fontWeight: 'bold', marginTop: 5
                                                        }}>{buttons.name}</Text>
                                                    </TouchableOpacity>
                                                ))}





                                            </View>
                                        </View>
                                    </Modal>
                                ) :
                                    <View>
                                        {/* setting modal */}
                                        {icn.name == "Settings" ? (
                                            <Modal visible={icn.visible}
                                            // onRequestClose={() => {
                                            //     this.setState({ home_visiable: !this.state.home_visiable, })
                                            // }}
                                            >
                                                <View style={{ flex: 1, backgroundColor: "#EAF2FC", }} >
                                                    <Text style={{
                                                        fontSize: 30, color: "#FC4871", fontWeight: "bold",
                                                        textAlign: "center", marginTop: 50
                                                    }}>Setting</Text>
                                                    <View style={{ flex: .86, marginTop: 25, marginBottom: 10 }}>
                                                        <TouchableOpacity activeOpacity={.5}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 20
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Icon name="user" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Edit Profile</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity activeOpacity={.5}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Icon name="flag" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Report</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity activeOpacity={.5}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Icon name="bell" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Notification</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity activeOpacity={.5}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 10
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Feather name="help-circle" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Help</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity activeOpacity={.5}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 10
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Feather name="file-text" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Term & Condition</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>

                                                        <TouchableOpacity activeOpacity={.5}
                                                        onPress={()=>{this.setState({login_visible:true})}}
                                                            style={{
                                                                width: "92%", height: 50, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                shadowOffset: {
                                                                    width: 0, height: 2
                                                                }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 10
                                                                , flexDirection: "row", paddingHorizontal: 15, alignItems: "center", justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Entypo name="log-out" style={{ fontSize: 15, color: "#aaa", fontWeight: "bold" }} />
                                                                <Text style={{ fontSize: 13, color: "#aaa", marginLeft: 8, fontWeight: "bold" }}>Log Out</Text>
                                                            </View>

                                                            <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{
                                                        flex: .1, marginTop: 60, flexDirection: "row",
                                                        justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center"
                                                    }}>
                                                        {this.state.icons.map((buttons, buttons_index) => (
                                                            <TouchableOpacity
                                                                onPress={
                                                                    () => {
                                                                        this.changeColor(buttons_index)
                                                                    }
                                                                }
                                                                style={{
                                                                    width: 75, height: 75, borderRadius: 8,
                                                                    shadowOffset: { width: 0, height: 2, },
                                                                    shadowOpacity: 0.01, shadowRadius: 1.84,
                                                                    elevation: 4,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    backgroundColor: "#EAF2FC",
                                                                    shadowColor: "#000",
                                                                }}>
                                                                <Feather name={buttons.icon} size={18}
                                                                    color={buttons.click ? '#fe2b5f' : '#92969d'} />
                                                                <Text style={{
                                                                    fontSize: 11,
                                                                    color: buttons.click ? '#fe2b5f' : '#92969d', fontWeight: 'bold', marginTop: 5
                                                                }}>{buttons.name}</Text>
                                                            </TouchableOpacity>
                                                        ))}




                                                    </View>



                                                </View>

                                            </Modal>
                                        ) :
                                            <View>
                                                {/* profile modal */}
                                                {icn.name == "Profile" ? (
                                                    <Modal visible={icn.visible}
                                                    onRequestClose={() => {
                                                        this.setState({visible:false ,home_visiable: true, })
                                                    }}
                                                    >
                                                        <View style={{ flex: 1, backgroundColor: "#EAF2FC", }} >

                                                            <Text style={{ fontSize: 30, color: "#FC4871", fontWeight: "bold", textAlign: "center", marginTop: 50 }}>Profile</Text>
                                                            <View style={{ width: '100%', height: 120, marginTop: 40 }}>

                                                                <View style={{
                                                                    width: 120, height: 120, borderRadius: 60, alignSelf: "center",
                                                                    backgroundColor: "#EAF2FC", shadowOffset: {
                                                                        width: 0, height: 2
                                                                    }, shadowOpacity: .5, shadowRadius: 25, elevation: 10,
                                                                }}>
                                                                    <Image source={{ uri: "https://i.pinimg.com/236x/5d/43/5c/5d435c5fc669effb6a8506bfcd165d31.jpg" }}
                                                                        style={{ width: 120, height: 120, borderRadius: 60, alignSelf: "center" }} />
                                                                </View>

                                                                <View style={{
                                                                    width: 45, height: 45, borderRadius: 22.5, backgroundColor: "#EAF2FC",
                                                                    shadowOffset: {
                                                                        width: 0, height: 2
                                                                    }, shadowOpacity: .5, shadowRadius: 25, elevation: 10, alignItems: "center",
                                                                    justifyContent: "center", alignSelf: "center", marginTop: -50, marginLeft: 110
                                                                }}>
                                                                    <Icon name="camera" style={{ fontSize: 20, color: "#FC4871" }} />
                                                                </View>
                                                            </View>

                                                            <View style={{
                                                                flex: .82, marginTop: 20, marginBottom: 10,
                                                            }}>
                                                                <TouchableOpacity activeOpacity={.5}
                                                                    style={{
                                                                        width: "98%", height: 65, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                        shadowOffset: {
                                                                            width: 0, height: 2
                                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                        , flexDirection: "row", paddingHorizontal: 12, alignItems: "center", justifyContent: "space-between"
                                                                    }}>
                                                                    <View style={{ width: 200, }}>
                                                                        <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Username</Text>
                                                                        <Text style={{ fontSize: 13, color: "#FC4871", fontWeight: "bold" }}>Alina Thomus</Text>
                                                                    </View>

                                                                    <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                                </TouchableOpacity>

                                                                <TouchableOpacity activeOpacity={.5}
                                                                    style={{
                                                                        width: "98%", height: 65, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                        shadowOffset: {
                                                                            width: 0, height: 2
                                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                        , flexDirection: "row", paddingHorizontal: 12, alignItems: "center", justifyContent: "space-between"
                                                                    }}>
                                                                    <View style={{ width: 320, }}>
                                                                        <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Email Address</Text>
                                                                        <Text style={{ fontSize: 13, color: "#FC4871", fontWeight: "bold" }}>alinathomus465@gmail.com</Text>
                                                                    </View>

                                                                    <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                                </TouchableOpacity>

                                                                <TouchableOpacity activeOpacity={.5}
                                                                    style={{
                                                                        width: "98%", height: 65, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                        shadowOffset: {
                                                                            width: 0, height: 2
                                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                        , flexDirection: "row", paddingHorizontal: 12, alignItems: "center", justifyContent: "space-between"
                                                                    }}>
                                                                    <View style={{ width: 200, }}>
                                                                        <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Phone</Text>
                                                                        <Text style={{ fontSize: 13, color: "#FC4871", fontWeight: "bold" }}>+509976****</Text>
                                                                    </View>

                                                                    <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                                </TouchableOpacity>

                                                                <TouchableOpacity activeOpacity={.5}
                                                                    style={{
                                                                        width: "98%", height: 65, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                        shadowOffset: {
                                                                            width: 0, height: 2
                                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                        , flexDirection: "row", paddingHorizontal: 12, alignItems: "center", justifyContent: "space-between"
                                                                    }}>
                                                                    <View style={{ width: 200, }}>
                                                                        <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Gender</Text>
                                                                        <Text style={{ fontSize: 13, color: "#FC4871", fontWeight: "bold" }}>Female</Text>
                                                                    </View>

                                                                    <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                                </TouchableOpacity>

                                                                <TouchableOpacity activeOpacity={.5}
                                                                    style={{
                                                                        width: "98%", height: 65, backgroundColor: "#EAF2FC", borderRadius: 5, alignSelf: "center",
                                                                        shadowOffset: {
                                                                            width: 0, height: 2
                                                                        }, shadowOpacity: .5, shadowRadius: 3.84, elevation: 5, marginTop: 15
                                                                        , flexDirection: "row", paddingHorizontal: 12, alignItems: "center", justifyContent: "space-between"
                                                                    }}>
                                                                    <View style={{ width: 200, }}>
                                                                        <Text style={{ fontSize: 13, color: "#aaa", fontWeight: "600" }}>Date of Birth</Text>
                                                                        <Text style={{ fontSize: 13, color: "#FC4871", fontWeight: "bold" }}>26/7/190</Text>
                                                                    </View>

                                                                    <Icon name="angle-right" style={{ fontSize: 16, color: "#FC4871" }} />
                                                                </TouchableOpacity>

                                                            </View>

                                                            <View style={{
                                                                flex: .13, marginTop: 20, flexDirection: "row",
                                                                justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center"
                                                            }}>
                                                                {this.state.icons.map((buttons, buttons_index) => (
                                                                    <TouchableOpacity
                                                                        onPress={
                                                                            () => {
                                                                                this.changeColor(buttons_index)
                                                                            }
                                                                        }
                                                                        style={{
                                                                            width: 75, height: 75, borderRadius: 8,
                                                                            shadowOffset: { width: 0, height: 2, },
                                                                            shadowOpacity: 0.01, shadowRadius: 1.84,
                                                                            elevation: 4,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            backgroundColor: "#EAF2FC",
                                                                            shadowColor: "#000",
                                                                        }}>
                                                                        <Feather name={buttons.icon} size={18}
                                                                            color={buttons.click ? '#fe2b5f' : '#92969d'} />
                                                                        <Text style={{
                                                                            fontSize: 11,
                                                                            color: buttons.click ? '#fe2b5f' : '#92969d', fontWeight: 'bold', marginTop: 5
                                                                        }}>{buttons.name}</Text>
                                                                    </TouchableOpacity>
                                                                ))}

                                                            </View>
                                                        </View>

                                                    </Modal>
                                                ) : null}
                                            </View>
                                        }
                                    </View>

                                }
                            </View>}
                    </View>
                ))}
                {/* warm up modal1 */}
                <Modal visible={this.state.warm_visible}
                    onRequestClose={() => { this.setState({ warm_visible: false }) }}>
                    <View style={{ flex: 1, backgroundColor: '#eee' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.setState({ warm_visible: false }) }}>
                                <FontAwesome name="long-arrow-left" size={30} style={{ margin: 15 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 80, marginTop: 8 }}>Warm <Text style={{ color: '#fe2b5f' }}>Up</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 18 }}>
                            {this.state.ex.map((ex, index) => (

                                <View style={{
                                    padding: 15,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: .1,
                                    shadowRadius: 3.84,
                                    elevation: 3.5,

                                    borderColor: '#fff',
                                }}>
                                    <Text style={{ textAlign: 'center', color: '#fe2b5f', fontWeight: 'bold' }}>{ex.num}</Text>
                                    <Text style={{ textAlign: 'center' }}>{ex.lose}</Text>
                                </View>

                            ))}

                        </View>
                        <View style={{
                            width: '85%'
                            , shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 5, borderColor: '#fff', alignSelf: 'center', borderRadius: 0
                        }}>
                            <ScrollView style={{ width: '90%', height: 620, marginLeft: 20, marginTop: 20 }} showsVerticalScrollIndicator={false}>
                                {this.state.type.map((excerscize, index) => (
                                    <TouchableOpacity style={{ flexDirection: 'row', width: '80%' }}
                                        onPress={() => { this.setState({ modalvisible: true, modelshow: excerscize }) }}
                                    >
                                        <View style={{
                                            width: 100, height: 100, marginVertical: 20,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 7, borderColor: '#ddd', borderRadius: 5
                                        }}>
                                            <Image source={{ uri: excerscize.img }} style={{
                                                flex: 1, borderRadius: 15

                                            }} /></View>
                                        <View style={{ width: 300, marginTop: 50, marginLeft: 30 }}>
                                            <Text style={{ fontWeight: 'bold' }}>{excerscize.ex_type}</Text>
                                            <Text style={{ color: '#fe2b5f', fontWeight: 'bold' }}>{excerscize.time}</Text>

                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                        </View>

                    </View>
                </Modal>

                {/*  warm up modal2*/}
                <Modal visible={this.state.modalvisible} onRequestClose={() => { this.setState({ modalvisible: false }) }}
                    animationType="slide">
                    <View style={{ backgroundColor: '#eee', flex: 1 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={() => { this.setState({ modalvisible: false }) }}>
                                <FontAwesome name="long-arrow-left" size={30} style={{ marginTop: 15, marginLeft: -10 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>Warm <Text style={{ color: '#fe2b5f', marginTop: 10 }}>Up</Text></Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <FontAwesome name="download" size={20} style={{ marginVertical: 10, marginTop: 25 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="heart" size={20} style={{ marginVertical: 10, marginLeft: 12, marginTop: 25 }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{
                            width: '90%', height: '75%'
                            , shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 5, borderColor: '#fff', alignSelf: 'center', marginTop: 70
                        }}>
                            <View style={{
                                width: 130, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderColor: '#fe2b5f', paddingVertical: 10, alignSelf: 'center'
                                , marginTop: 50
                            }}>
                                <Text style={{ fontWeight: 'bold' }}>{this.state.modelshow.ex_type}</Text>
                            </View>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, marginTop: -13, backgroundColor: '#eee' }}>
                                <Text style={{ fontSize: 12, color: '#9c9a9a' }}>05 of 09</Text>
                            </View>
                            <View style={{
                                width: 250, height: 250, marginTop: 50, alignSelf: 'center'
                            }}>
                                <Image source={{ uri: this.state.modelshow.img }} style={{
                                    flex: 1, borderRadius: 15

                                }} /></View>


                            <TouchableOpacity style={{
                                width: 60, height: 60, backgroundColor: '#fe2b5f',
                                borderRadius: 30, justifyContent: 'center',
                                alignItems: 'center'
                                , alignSelf: 'center', marginTop: 35
                            }}
                            // onPress={() => { this.tick() }}
                            >

                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.counter}</Text>
                            </TouchableOpacity>

                            {/* <TouchableOpacity style={{
                                width: 150, height: 35, backgroundColor: '#fe2b5f', justifyContent: 'center', alignItems: 'center',
                                borderRadius: 15, position: 'absolute', marginTop: 520, marginLeft: 70, alignSelf: "center"
                            }}
                                onPress={() => this.componentDidMount()}
                            >
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Start excercsize</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </Modal>

                {/* warm up modal2 */}
                <Modal visible={this.state.modalvisible2} onRequestClose={() => { this.setState({ modalvisible2: false }) }}
                    animationType="slide">
                    <View style={{ backgroundColor: '#eee', flex: 1 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.setState({ modalvisible: false, modalvisible2: false }) }} >
                                <FontAwesome name="long-arrow-left" size={30} style={{ marginTop: 10, marginLeft: 15 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: '80%', height: '65%'
                            , shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 5, borderColor: '#fff', alignSelf: 'center', marginTop: 70, alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fe2b5f', marginTop: 50 }}>Congratulations!</Text>
                            <Text style={{ marginTop: 30 }}>you just completed</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Warm Up</Text>

                            <TouchableOpacity style={{
                                width: 160, height: 45, backgroundColor: '#fe2b5f', justifyContent: 'center', alignItems: 'center',
                                borderRadius: 15, marginTop: 30
                            }}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Share</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <View style={{
                                    padding: 15,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: .1,
                                    shadowRadius: 3.84,
                                    elevation: 3.5, borderColor: '#fff',
                                }}>
                                    <Text style={{ textAlign: 'center', color: '#fe2b5f', fontWeight: 'bold' }}>25</Text>
                                    <Text style={{ textAlign: 'center' }}>Calories</Text>
                                </View>

                                <View style={{
                                    padding: 15,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: .1,
                                    shadowRadius: 3.84,
                                    elevation: 3.5, borderColor: '#fff', marginLeft: 20
                                }}>
                                    <Text style={{ textAlign: 'center', color: '#fe2b5f', fontWeight: 'bold' }}>5</Text>
                                    <Text style={{ textAlign: 'center' }}>minutes</Text>
                                </View>


                            </View>

                        </View>

                        <TouchableOpacity
                            onPress={() => { this.setState({ modalvisible: false, modalvisible2: false }) }}
                            style={{
                                width: 150, height: 45, borderColor: '#fe2b5f', justifyContent: 'center', alignItems: 'center',
                                borderRadius: 15, alignSelf: 'center', borderWidth: 2, marginTop: 20
                            }}>
                            <Text style={{ fontWeight: 'bold', color: '#fe2b5f' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
               
               
                {/* custom modal */}
                <Modal visible={this.state.custom_visible}
                    onRequestClose={() => { this.setState({ custom_visible: false }) }}>
                    <View style={{ flex: 1, backgroundColor: "#EAF2FC" }}>
                        <View style={{
                            width: '90%', alignSelf: 'center', alignItems: 'center',
                            justifyContent: 'space-between', flexDirection: 'row',
                            marginLeft: 20
                        }}>
                            <TouchableOpacity onPress={() => {
                                this.setState({ new_workout_visible: false, custom_visible: false })
                            }}><FontAwsome name='long-arrow-left' size={35} color='#000' style={{ marginTop: 40 }} /></TouchableOpacity>
                            <Text style={{
                                fontWeight: 'bold', fontSize: 25, marginLeft: 35,
                                alignSelf: 'center', marginTop: 35, marginRight: 80
                            }} >Custom <Text style={{
                                color: '#fe2b5f',
                                fontSize: 25, fontWeight: 'bold', alignSelf: 'center'
                            }}>Workout</Text> </Text>
                        </View>

                        <View style={{
                            width: "90%", height: "85%", alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20, alignSelf: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.46,
                            shadowRadius: 11.14,

                            elevation: 17,
                        }}>
                            <ScrollView style={{ width: "100%", height: "100%", }} showsVerticalScrollIndicator={false}>
                                {this.state.workout.map((work, work_index) => (
                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between",
                                        width: "95%", paddingHorizontal: 10,borderRadius:10,
                                        height: 140, alignItems: "center", alignSelf: "center",
                                        marginTop: 20,
                                    backgroundColor: "#EAF2FC",
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.39,
                                        shadowRadius: 8.30,
                                        
                                        elevation: 13,
                                    }}>
                                        <View style={{ flexDirection: "column", marginTop: 8 }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{work.title}</Text>
                                            <Text style={{ color: "#bbb" }}>{work.number_of_exer} Exercise</Text>
                                            <Text style={{ color: "#fe2b5f" }}>{work.time_of_exer} Minutes</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            this.toggFun(work_index)
                                        }}>
                                            {/* check-square square*/}
                                            <FontAwsome name={work.togg ? "toggle-on" : "toggle-off"} style={{
                                                fontSize: 25, marginRight: 10, marginTop: -10,
                                                color: work.togg ? "#fe2b5f" : "#ddd",
                                            }} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ add_new_workout_visible: true })
                                    }}
                                    style={{
                                        backgroundColor: "#fe2b5f", width: 250, height: 50, alignSelf: "center",
                                        alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: 25, marginBottom: 15
                                    }}>
                                    <Text style={{ color: "#fff" }}>Add New Workout</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>

                </Modal>

                {/*add new workout modal */}
                <Modal visible={this.state.add_new_workout_visible}
                    onRequestClose={() => { this.setState({ add_new_workout_visible: false }) }}>

                    <View style={{ flex: 1, backgroundColor: "#EAF2FC" }}>
                        <Text style={{
                            fontWeight: 'bold', fontSize: 25, alignSelf: 'center',
                            marginTop: 40
                        }}>Custom <Text style={{
                            color: '#fe2b5f', fontSize: 25,
                            fontWeight: 'bold', alignSelf: 'center'
                        }}>Workouts</Text></Text>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    this.setState({ new_workout_visible: true })
                                }
                            }
                            style={{
                                backgroundColor: "#EAF2FC", width: 150, height: 150, alignSelf: 'center',
                                borderRadius: 7, alignItems: 'center', justifyContent: 'center'
                                , shadowColor: "#000", shadowOffset: { width: 0, height: 8, },
                                shadowOpacity: 0.75, shadowRadius: 5.84, elevation: 7,
                                marginTop: 260
                            }}>
                            <AntDesign name='plus' size={30} color='#fe2b5f' />
                        </TouchableOpacity>
                        <Text style={{
                            color: '#92969d', fontWeight: 'bold',
                            fontSize: 15, alignSelf: 'center', marginTop: 20,
                            letterSpacing: 1.5
                        }}>Build your first design</Text>
                    </View>



                    <Modal visible={this.state.new_workout_visible}
                    >
                        <View style={{ flex: 1, backgroundColor: "#EAF2FC" }}>
                            <View style={{
                                width: '90%', alignSelf: 'center', alignItems: 'center',
                                justifyContent: 'space-between', flexDirection: 'row', marginLeft: 15
                            }}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({ new_workout_visible: false })
                                }}><FontAwsome name='long-arrow-left' size={30} color='#000' style={{ marginTop: 30 }} /></TouchableOpacity>
                                <Text style={{
                                    fontWeight: 'bold', fontSize: 25, marginLeft: 20,
                                    alignSelf: 'center', marginTop: 25, marginRight: 90
                                }} >New <Text style={{
                                    color: '#fe2b5f',
                                    fontSize: 25, fontWeight: 'bold', alignSelf: 'center'
                                }}>Workout</Text> </Text>
                            </View>
                            <View>
                                <View style={{
                                    width: '85%', alignSelf: 'center', alignItems: 'center',
                                    justifyContent: 'space-between', flexDirection: 'row', marginTop: 130
                                }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Workout Title</Text>
                                    <TextInput
                                        width={150}
                                        underlineColorAndroid='#000'
                                        style={{ color: '#92969d', fontWeight: 'bold', fontSize: 15, marginTop: -15 }} />
                                </View>
                                <View style={{ width: '85%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Exercise Duration</Text>
                                    <TextInput
                                        width={150}
                                        underlineColorAndroid='#000'
                                        style={{ color: '#92969d', fontWeight: 'bold', fontSize: 15 }} />
                                </View>
                                <View style={{ width: '85%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Get Ready Duration</Text>
                                    <TextInput
                                        width={150}
                                        underlineColorAndroid='#000'
                                        style={{ color: '#92969d', fontWeight: 'bold', fontSize: 15 }} />
                                </View>
                                <View style={{ width: '85%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rest Frequency</Text>
                                    <TextInput
                                        width={150}
                                        underlineColorAndroid='#000'
                                        style={{ color: '#92969d', fontWeight: 'bold', fontSize: 15 }} />
                                </View>
                                <View style={{ width: '85%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rest Duration</Text>
                                    <TextInput
                                        width={150}
                                        underlineColorAndroid='#000'
                                        style={{ color: '#92969d', fontWeight: 'bold', fontSize: 15 }} />
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ add_exercise_visible: true })
                                }}
                                style={{ width: 200, height: 50, borderRadius: 8, backgroundColor: '#fe2b5f', marginTop: 320, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}>Add Exercise</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </Modal>
                {/* add exercise modal */}
                <Modal visible={this.state.add_exercise_visible}
                    onRequestClose={() => { this.setState({ add_exercise_visible: false }) }}>

                    <View style={{ flex: 1, backgroundColor: "#EAF2FC", opacity: 0.95 }}>
                        <View style={{
                            flexDirection: "row", width: "90%", height: 60, marginTop: 10,
                            padding: 10, alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => { this.setState({ add_exercise_visible: false }) }}>
                                <FontAwesome5 name="long-arrow-alt-left" style={{ fontSize: 30, marginLeft: 13, marginTop: 8 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 100 }}>Add
                                <Text style={{ fontSize: 15, color: "#fe2b5f", fontWeight: "bold", marginLeft: 20 }}>  Exercise</Text></Text>
                        </View>

                        <View style={{
                            width: "90%", height: "86%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20, alignSelf: "center", shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.46,
                            shadowRadius: 11.14,

                            elevation: 17,
                        }}>
                            <ScrollView style={{ width: "100%", height: "100%", }} showsVerticalScrollIndicator={false}>
                                {this.state.exersizes.map((exer, exer_index) => (
                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between",
                                        width: "98%", paddingLeft: 10,
                                        height: 140, alignItems: "center", alignSelf: "center",
                                        marginTop: 20,
                                        backgroundColor: "#fff",paddingHorizontal:8,
                                        borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.37,
                                        shadowRadius: 7.49,

                                        elevation: 12,
                                    }}>
                                        <Image source={exer.image}
                                            style={{ width: 130, height: 130, borderRadius: 20 }} />
                                        <View style={{ flexDirection: "column", marginTop: 8 }}>
                                            <Text>{exer.img_name}</Text>
                                            <Text style={{ color: "#fe2b5f" }}>{exer.time} s</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => {
                                            this.checkFun(exer_index)
                                        }}>
                                            {/* check-square square*/}
                                            <FontAwesome5 name={exer.cheked ? "check-square" : "square"} style={{
                                                fontSize: 25, marginRight: 10, marginTop: -10,
                                                color: exer.cheked ? "#fe2b5f" : "#ddd",
                                            }} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            add_exercise_visible: false, add_new_workout_visible: false,
                                            new_workout_visible: false
                                        })
                                    }}
                                    style={{
                                        backgroundColor: "#fe2b5f", width: 150, height: 50, alignSelf: "center",
                                        alignItems: "center", justifyContent: "center", 
                                        borderRadius: 10, marginTop: 25, marginBottom: 15
                                    }}>
                                    <Text style={{ color: "#fff" }}>Done</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>


                </Modal>


            </>
        );
    }
}
