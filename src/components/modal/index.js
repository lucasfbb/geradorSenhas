import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";


export function ModalPassword({ password, handleClose }){
    return(

        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.innerPasswordText}>
                        {password}
                    </Text>
                </Pressable>
                
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        width:'85%',
        paddingBottom:24,
        paddingTop:24,
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:24
    },
    innerPassword:{
        backgroundColor:'black',
        width:'55%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginBottom:24
    },
    innerPasswordText:{
        color:'white',
        padding:12,
        textAlign:'center'
    },
    buttonArea:{
        flexDirection:'row',
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'

    },
    button:{
        flex:1,
        alignItems:'center',
        marginBottom:14,
        marginTop:14,
        padding:8
    },
    buttonSave:{
        backgroundColor:'#392de9',
        borderRadius:8
    },
    buttonSaveText:{
        color:'white',
        fontWeight:'bold'
    }

})