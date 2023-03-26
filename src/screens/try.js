<View style={styles.container}>
  <View style={styles.header}>
    <Text style={[styles.text, styles.firstColor]}>Nepal Can Code</Text>
    <Text style={styles.textlog}>Login</Text>
  </View>

  <View style={styles.body}>
    <View style={styles.logincontainer}>
      <StatusBar style="auto" />
      <Text style={styles.textlogc}>Log in</Text>
      <Divider style={styles.divider}></Divider>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>;
