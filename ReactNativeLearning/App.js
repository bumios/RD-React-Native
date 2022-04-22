

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Switch,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const App = () => {

  const titleText = "You can tap me to changed description"
  const [descriptionText, setDescriptionText] = useState("You haven't tap on title text.")
  const [inputText, setInputText] = useState("Please fill out the text input above")
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false)
  const toggleSwitch = () => { setIsSwitchEnabled(!isSwitchEnabled) }

  function handleTapOnTitleText() {
    setDescriptionText("You have just tapped on title.");
  }

  function handleUpdateInputText(text) {
    const dislayValue = "Inputed: " + text
    setInputText(dislayValue)
  }

  return (
    <ScrollView>
      <View style={{ width: "100%", alignItems: 'center' }}>
        <Text style={ styles.titleText } onPress={ handleTapOnTitleText }> { titleText } </Text>
        <Text style={ styles.descriptionText }> { descriptionText } </Text>
        
        <View style={ styles.containerView }>
          <Text style={{ color: 'aliceblue', fontWeight: 'bold' }}>
            I'm aliceblue and bold
            <Text style={{ color: 'green', fontWeight: 'normal' }}> I'm green and not bold</Text>
          </Text>
          <View style={{ marginTop: 10, backgroundColor: "blue", width: "90%", height: "50%", borderRadius: 5}} />
        </View>

        <Image source={require('./src/assets/images/test-image-react-native.png')} style={{ width: 200, height: 200, borderRadius: 5 }} resizeMode={'cover'} />

        <View style={{backgroundColor: "cadetblue", width: "80%", height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput multiline style={{backgroundColor: 'white', borderRadius: 5}} placeholder="Please fill out the text input above" keyboardType='email-address' onChangeText={ handleUpdateInputText }></TextInput>
          <Text> { inputText } </Text> 
        </View>

        <Switch
          trackColor={{ false: "darkred", true: "darkturquoise" }}
          thumbColor={isSwitchEnabled ? "cyan" : "red"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={ isSwitchEnabled }
        />

        <LoadFlatList/>

        <View flexDirection='row'>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00"/>
        </View>

        <View style={{backgroundColor: 'gray', height: 100}} flexDirection='row'>
          <View style={{ flex: 0.5, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    </ScrollView>
  );
};

function LoadFlatList() {
  const [selectedId, setSelectedId] = useState(null);
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  const Item = (props) => (
    <TouchableOpacity onPress={ props.onPress }>
      <View style={{ backgroundColor: props.backgroundColor, borderRadius: 5, marginVertical: 5, width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: props.titleColor }}> { props.title } </Text>
      </View>
    </TouchableOpacity>
  )

  const renderItem = (props) => {
    const backgroundColor = props.item.id === selectedId ? 'skyblue' : 'steelblue'
    const titleColor = props.item.id === selectedId ? 'steelblue' : 'skyblue'
    return (
      <Item onPress={ () => { handleTapOnItem(props.item.id) } } title={props.item.title} backgroundColor={backgroundColor} titleColor={titleColor} />
    )
  }

  const [result, setResult] = useState("🔮");
  const handleTapOnItem = (id) => {
    setSelectedId(id)
  }

  return (
    <FlatList data={data} renderItem={ renderItem } style={{ width: '100%' }}/>
  )
}

var styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  descriptionText: {
    color: 'orange',
  },
  containerView: {
    backgroundColor: "cadetblue", 
    width: "80%", 
    height: 100, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {Array(values).map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   // const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
