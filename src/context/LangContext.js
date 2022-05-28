import React, {useState, useContext} from 'react'
import pspa from '../components/pspa.json'
import mcinc from '../components/mc.json'

const LangContext = React.createContext()

export function useLang(){
    return useContext(LangContext);
}

export function LangProvider ({children}) {
    const [lang, setLang] = useState('eng')
    const [poke, setPoke] = useState(pspa.eng)
    const [mcInfo, setMcInfo] = useState(mcinc.eng)
    function changeLang() {
        if(lang==='eng'){
            console.log(pspa)
            setPoke(pspa.spa)
            setMcInfo(mcinc.spa)
            setLang('spa')
        } else {
            setPoke(pspa.eng)
            setMcInfo(mcinc.eng)
            setLang('eng')
        }
    }
    const value = {
        lang,
        changeLang,
        poke,
        mcInfo
    }
    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}