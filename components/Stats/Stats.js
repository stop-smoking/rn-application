import * as React from 'react';
import {AsyncStorage, FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import {API_URL} from 'react-native-dotenv'


export default class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: [],
            loading: false
        }
        this._loadStats();
    }

    _loadStats = async () => {
        const result = await fetch(API_URL + 'api/user-stat/me', {
            headers: {
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const data = await result.json();
        if (data.status !== 500) {
            this.state.stats = data;
            this.state.loading = true;
        }
        this.forceUpdate()
    };

    keyExtractor = (item, index) => index.toString()

    _displayDetailStats = (stat) => {
        this.props.navigation.navigate("DetailStats", {'stat': stat})
    };
    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            this._displayDetailStats(item)
        }}>
            <ListItem
                containerStyle={styles.containerList}
                contentContainerStyle={styles.item}
                titleStyle={styles.titlecontent}
                title={item.title}
                leftAvatar={{source: {uri: API_URL + 'uploads/images/stats/' + item.image}}}
                chevron
            />
        </TouchableOpacity>
    )

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Vos accomplissements</Text>
                    <FlatList
                        style={styles.content}
                        keyExtractor={this.keyExtractor}
                        data={this.state.stats}
                        renderItem={this.renderItem}
                    />
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Courage vous aurez des accomplissements</Text>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#fb5b5a",
        marginTop: 40,
        padding: 20
    },
    content: {
        backgroundColor: "#003f5c",
        height: 50,
        marginBottom: 20,
        color: "#ffffff",
        padding: 20
    },
    containerList: {
        backgroundColor: "#465881",
        height: 70,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20
    },
    item: {
        height: 40,
        marginTop: 15,
        margin: 5
    },
    titlecontent: {
        color: "#003f5c",
        fontSize: 20,
        fontWeight: "bold",

    },
    text: {
        color: "#ffffff",
    },
});

