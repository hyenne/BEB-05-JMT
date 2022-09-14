
import './styles/UserData.css';
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil"
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import { tempRankAtom } from "../recoil/temp/atom"

function UserData({rankArr, userData, rank}) {
    const [tempRank, setTempRank] = useRecoilState(tempRankAtom);
    const [img, setImg] = useState();
    const [str, setStr] = useState();
    const [isChar, setIsChar] = useState();
    const [isWeapon, setIsWeapon] = useState();
    const [realRank, setRealRank] = useState();

    useEffect(() => {
        metadata();
    }, []);

    const metadata = async() => {
        const char = await contractAPI.fetchCharacter(userData.charId);
        const weapon = await contractAPI.fetchWeapon(userData.weaponId);
        const hasChar = await contractAPI.isCharOwner(userData.address, userData.charId);
        const hasWeapon = await contractAPI.isWeaponOwner(userData.address, userData.weaponId);
        console.log(hasChar);
        console.log(hasWeapon);
        setIsChar(hasChar);
        setIsWeapon(hasWeapon);
        if(hasChar&&hasWeapon){
            const curStr = await strength(userData);
            const check = rank!=1&&curStr==await strength(rankArr[rank-2]);
            console.log(check);
            // if(check){
            //     setRealRank(tempRank);
            //     console.log(tempRank);
            // }else{
            //     console.log(rank);
            //     setTempRank(rank);
            //     setRealRank(rank);
            // }
            setRealRank(rank);
            setStr(curStr);
            const standImage = await metadataAPI.fetchStandImage(char.attributes, weapon.attributes, '0');
            setImg(standImage);
            console.log("check");
        }

        if(rank==rankArr.length){
            console.log('final');
            setTempRank(1);
        }
    }

    const strength = async(userData) => {
        const result = await contractAPI.fetchStrength(userData.weaponId);
        return result;
    }

    return (
        (isChar&&isWeapon ? 
            <div className='userdata-container'>
                <div className='userdata-rank'>{realRank}위</div>
                <div className='userdata-name'>{userData.username}</div>
                <img className='userdata-char' src={img} />
                <div className='userdata-str'>Lv.{str}</div>
            </div>
            :
            null
        )            
    );
}
export default UserData;