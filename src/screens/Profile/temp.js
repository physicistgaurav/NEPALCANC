import React from 'react';
import {
   SafeAreaView,
   View,
   Button,
} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
    
export default function Temp() {
   return (
      <SafeAreaView>
        <View>
        <View style={{ height: 250 }} />

          <Button title='pdf' onPress={() => OpenAnything.Pdf('file:/storage/emulated/0/Download/sample.pdf')}/>
        </View>
      </SafeAreaView>
    );
  };