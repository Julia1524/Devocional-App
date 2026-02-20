import * as Fonts from 'expo-font';
import { useEffect, useState } from 'react';

export default function useCustomFonts() {

    const [fontsloaded, setFontsLoaded]  = useState(false);

    useEffect(() => {
        async function loadFonts(){
            await Fonts.loadAsync({
                'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
                'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
                'Poppins-SemiBold': require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
                'MedievalSharp': require('../assets/fonts/medievalSharp/MedievalSharp-Regular.ttf'),
               });
        setFontsLoaded(true);
    }

    loadFonts();
    }, []);

    return fontsloaded;
}