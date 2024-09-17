import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, View, Image, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import styles from './styles.tsx';

import { addCompany } from '../../../../database/companyService.js';
import CustomInput from '../../../../components/CustomInput/CustomInput.tsx';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../../../../assets/images/index.js';


const AddCompanyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();


    const [image, setImage] = useState(null);
    const logoDir = `${RNFS.DocumentDirectoryPath}/LogoImages`;

    const handleAddCompany = async (data) => {
        await addCompany(image, data.name, data.address, data.city, data.code, data.nip, data.email, data.phone );
        navigation.goBack();
      };

      const pickImage = () => {
        let options = {
          mediaType: 'photo',
          selectionLimit: 1,
        };
    
        launchImageLibrary(options, async response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            const { uri } = response.assets[0];
            await setImage(uri);
          }
        });
      };
    

      useEffect(() => {
        if (errors.name) Alert.alert('Błąd', errors.name.message);
    }, [errors]);


  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <View style={styles.label}>
          <Text style={styles.textLabel}>Logo</Text>
        </View>

        <View style={styles.imageContainer}>


        {image ? (
            <View style={styles.insideContainer}>
       
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <TouchableOpacity style={styles.deleteButton} onPress={() => setImage('')}>
                <Image source={IMAGES.TRASH } style={styles.icon} />

                </TouchableOpacity>
            </View>

         
          ) : (
            <TouchableOpacity style={styles.uploadContainer} onPress={pickImage} > 
              <Image source={IMAGES.IMAGE } style={styles.imageIcon} />
              <Text>Wybierz zdjecie z galerii</Text>
            </TouchableOpacity>
          )}
      </View>
      </View>

      <View style={styles.box}>
        <View style={styles.label}>
          <Text style={styles.textLabel}>Ogólne informacje</Text>
        </View>
        <CustomInput 
            label={"Nazwa"}
            rules= {{required: 'Nazwa jest wymagana' }}
            name={"name"}
            placeholder={"Wprowadź nazwę"}
            control={control}
        />

        <CustomInput 
            label={"NIP"}
            name={"nip"}
            placeholder={"Wprowadź NIP"}
            control={control}
        />
      </View>

      <View style={styles.box}>
        <View style={styles.label}>
          <Text style={styles.textLabel}>Adres działalności</Text>
        </View>

        <CustomInput 
            label={"Adres"}
            name={"address"}
            placeholder={"Wprowadź adres"}
            control={control}
        />

        <CustomInput 
            label={"Miasto"}
            name={"city"}
            placeholder={"Wprowadź miasto"}
            control={control}
        />

        <CustomInput 
            label={"Kod pocztowy"}
            name={"code"}
            placeholder={"Wprowadź kod pocztowy"}
            control={control}
        />
      </View>

      <View style={styles.box}>
        <View style={styles.label}>
          <Text style={styles.textLabel}>Kontakt</Text>
        </View>
  
        <CustomInput 
            label={"Email"}
            name={"email"}
            placeholder={"Wprowadź email"}
            control={control}
        />

        <CustomInput 
            label={"Telefon"}
            name={"phone"}
            placeholder={"Wprowadź telefon"}
            control={control}
        />
      </View>

              
      <TouchableOpacity style={styles.button}  onPress={handleSubmit(handleAddCompany)} > 
        <Text style={styles.text} >Dodaj działalność</Text>
      </TouchableOpacity>

    </View>
  )
} 

export default AddCompanyForm;