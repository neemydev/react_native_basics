import { StyleSheet, Text, View  , ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import { BlogCard, ElevatedCard, FancyCard, FlatCard } from '../../components'

export default function Home() {
  return (
      <SafeAreaView>   
        <ScrollView>
          <View>
            <FlatCard />
            <ElevatedCard/>
            <FancyCard/>
            <BlogCard/>
          </View>
        </ScrollView>
    </SafeAreaView>
      
  )
    
}

const styles = StyleSheet.create({})

