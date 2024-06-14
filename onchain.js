import fetch from "node-fetch";
import delay from "delay";
import moment from 'moment';
import { setTimeout } from 'timers/promises';

const getToken = (hash) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/validate", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"347\", \"Chromium\";v=\"347\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: `{\"hash\":\"${hash}\"}`,
            method: "POST",
            mode: "cors",
            credentials: "omit"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const accountInfo = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/info", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
              "authorization": `Bearer ${bearer}`,
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"347\", \"Chromium\";v=\"347\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const accountRankInfo = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/league", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
              "authorization": `Bearer ${bearer}`,
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"347\", \"Chromium\";v=\"347\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const getClick = (bearer,totalClick) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/klick/myself/click", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
              "authorization": `Bearer ${bearer}`,
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"347\", \"Chromium\";v=\"347\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: `{\"clicks\":${totalClick}}`,
            method: "POST",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const getEnergy = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/boosts/energy", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8",
              "authorization": `Bearer ${bearer}`,
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"359\", \"Chromium\";v=\"359\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/boost",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: "{}",
            method: "POST",
            mode: "cors",
            credentials: "include"
          })
        // .then((res) => res.json())
        .then((res) => res.clone().json().catch(() => res.text()))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const getInfoUpgradeClick = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/clicks/nlevel", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
              "authorization": `Bearer ${bearer}`,
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"347\", \"Chromium\";v=\"347\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/boost",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
const upgradeClick = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/level/clicks", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8",
              "authorization": `Bearer ${bearer}`,
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"359\", \"Chromium\";v=\"359\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/boost",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: "{}",
            method: "POST",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  const getInfoUpgradeEnergy = (bearer) =>
  new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/energy/nlevel", {
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,vi;q=0.7",
            "authorization": `Bearer ${bearer}`,
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"359\", \"Chromium\";v=\"359\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        referrer: "https://db4.onchaincoin.io/boost",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include"
        })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const upgradeEnergy = (bearer) =>
    new Promise((resolve, reject) => {
        fetch("https://db4.onchaincoin.io/api/level/energy", {
            headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8",
              "authorization": `Bearer ${bearer}`,
              "content-type": "application/json",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"359\", \"Chromium\";v=\"359\", \"Not=A?Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": "\"Android\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            referrer: "https://db4.onchaincoin.io/boost",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: "{}",
            method: "POST",
            mode: "cors",
            credentials: "include"
          })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
(async () => {
    while (true) {
        try{
        const hash = ''

        // const getTokens = await getToken(hash)

        let totalClick = getRandomInt(1, 5);
        let accountInfos
        let accountRankInfos
        let getEnergys
        let getClicks
        let getInfoUpgradeClicks
        let upgradeClicks
        let getInfoUpgradeEnergys
        let upgradeEnergys

        // console.log(getTokens)
        if(getTokens.token){
            console.log("")
            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Get Token Success...")
            accountInfos = await accountInfo(getTokens.token)
            // console.log("accountInfos : ",accountInfos)
            accountRankInfos = await accountRankInfo(getTokens.token)
            // console.log("accountRankInfos : ",accountRankInfos)
            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Name : ${accountInfos.user.fullName} | tgId : ${accountInfos.user.tgId} | Rank : [${accountRankInfos.me.userRank}|${accountInfos.user.league}] | Coins : ${accountInfos.user.coins} | Click : ${accountInfos.user.clicks}|${accountInfos.user.clickLevel} | Energy : [${accountInfos.user.energy}|${accountInfos.user.maxEnergy}|${accountInfos.user.energyLevel}|${accountInfos.user.dailyEnergyRefill}] | Boost : [${accountInfos.user.dailyClickBoosts}|${accountInfos.user.maxClickBoost}] | Referral : ${accountInfos.user.referals}`)

            if(accountInfos.user.isBanned == false){
                const totalclick = accountInfos.user.clickLevel*totalClick
                const newstotalclick = accountInfos.user.energy/accountInfos.user.clickLevel
                // console.log(accountInfos.user.energy+" | "+totalclick)
                if(accountInfos.user.energy > totalclick){
                    getClicks = await getClick(getTokens.token,totalClick)
                    // if(getClicks)
                    console.log(getClicks)
                    console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Success ${totalClick} Click | Click ${getClicks.clicks} | Total Energy : ${getClicks.energy} | Coins ${getClicks.coins} | Boost : ${getClicks.hasBoost}`)

                    // check if available for click upgrade
                    getInfoUpgradeClicks = await getInfoUpgradeClick(getTokens.token)
                    // console.log(getInfoUpgradeClicks)
                    if(getClicks.coins > getInfoUpgradeClicks.level.upgradeCost){
                        upgradeClicks = await upgradeClick(getTokens.token)
                        if(upgradeClicks.status == true){
                            // console.log(upgradeClicks)
                            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Upgrade Click Success : ${upgradeClicks.clickLevel} | Next Upgrade : [Lv ${upgradeClicks.nextLevel.pointsPerClick}|Cost ${upgradeClicks.nextLevel.upgradeCost}]`)
                        }else{
                            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Upgrade Click Failed, ${upgradeClicks.error}...`)
                        }
                    }else{
                        // console.log(`You don't hve enough coins to upgrade click...`)
                    }
                    
                    // check if available for energy upgrade
                    getInfoUpgradeEnergys = await getInfoUpgradeEnergy(getTokens.token)
                    // console.log(getInfoUpgradeEnergys)
                    if(getClicks.coins > getInfoUpgradeEnergys.level.upgradeCost){
                        upgradeEnergys = await upgradeEnergy(getTokens.token)
                        if(upgradeEnergys.status == true){
                            // console.log(upgradeEnergys)
                            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Upgrade Energy Success : ${upgradeEnergys.energyLevel} | Next Upgrade : [Lv ${upgradeEnergys.nextLevel.maxEnergy}|Cost ${upgradeEnergys.nextLevel.upgradeCost}]`)
                        }else{
                            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Upgrade Energy Failed, ${upgradeEnergys.error}...`)
                        }
                    }else{
                        // console.log(`You don't hve enough coins to upgrade energy...`)
                    }

                }else{
                    console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Your account no enought energy, try to claim daily energy...")
                    getEnergys = await getEnergy(getTokens.token)
                    // console.log(getEnergys)
                    if(getEnergys.status == true){
                        console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`Refill Energy Success : ${getEnergys.user.energy} | Time : ${getEnergys.user.lastRepareEnergy}`)
                    }else{
                        console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+`${getEnergys}, Delay 1 Minutes...`)
                        await delay(60000)
                    }
                }
            }else{
                console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Your account has been banned...")
            }
        }else{
            console.log(`[${moment().format("DD/MM/YY HH:mm:ss")}] `+"Get Token Failed...")
        }
    } catch (e) {
        // console.log(e)
        console.log('Bad gateway...')
    }
        await delay(3000)
    }
})();
