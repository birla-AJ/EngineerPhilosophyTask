
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

const { width, height } = Dimensions.get('window');

const DropDown = props => {
    const { data, onPress, qualification, titleName, error, editable = true, lableStyle } = props;
    const [isSelected, setSelected] = useState(false);
    const [Data, setData] = useState(data);

  

    const onPressDropdown = () => {
        if (editable) {
            setSelected(!isSelected);
        }

    };

    const renderItem = () => {
        return (
            <View>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                                paddingTop: 10
                            }}
                            onPress={() => onPress(item.name, setSelected(!isSelected))}>
                               
                            <Text style={styles.age}> {item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
   

    return (
        <View style={styles.container}>
            <Text style={[styles.selectBankText, lableStyle]}>{titleName}</Text>
            <TouchableOpacity
                onPress={() => onPressDropdown()}
                activeOpacity={0.6}
                style={[styles.mainContainer, { height: isSelected ? 'auto' : 50, backgroundColor: editable ? 'white' : 'gray' }]}>
                <View style={styles.row}>
                    <Text
                        style={[styles.qualification, { color: qualification ? 'black' : 'grey' }]}>
                        {qualification ? qualification : `Select ${titleName}`}
                    </Text>
                    <Image source={isSelected ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')}
                        style={styles.donnArrow} tintColor={'black'} />
                </View>
                {isSelected && (
                    <ScrollView
                        style={styles.scrollView}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        {renderItem()}
                    </ScrollView>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default DropDown;


const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    mainContainer: {
        borderRadius: 5,
        justifyContent: 'center',
        elevation: 3,
    },
    qualification: {
        color: 'grey',
        fontSize: 18,
    },
    donnArrow: {
 height: 16,
        width: 16,
    },
    row: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    itemSeparator: {
        borderBottomWidth: 0.8,
        borderColor: 'grey',
        marginVertical: 8,
    },
    age: {
        fontSize: 16,
        color: 'black',
        paddingVertical: 2,
        fontWeight: '500'
    },
    selectBankText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        marginLeft: 5
    }
});
