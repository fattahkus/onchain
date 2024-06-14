import fetch from "node-fetch";
import delay from "delay";
import moment from 'moment';
import fs from "fs";
import { Twisters } from "twisters";
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
              "accept-language": "en-US,en;q=0.9,id;q=0.8",
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
    const readFileToJSON = (path) => {
        return JSON.parse(fs.readFileSync(path, "utf8"));
      };
(async () => {

  const queryList = readFileToJSON("./onchain.json");
  const twisters = new Twisters();

    while (true) {
      await Promise.all(
          queryList.map(async (query) => {
            try{
              const getTokens = await getToken(query)
              let totalClick = getRandomInt(1, 5);
              // console.log(getTokens)
              if(getTokens.token){
                  const accountInfos = await accountInfo(getTokens.token)
                  const accountRankInfos = await accountRankInfo(getTokens.token)
                  var username = accountInfos.user.fullName
                        twisters.put(username,{
                          text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  | 🏆 ${accountRankInfos.me.userRank}:${accountInfos.user.league} |🪙 ${accountInfos.user.coins} |🖱 ${accountInfos.user.clicks}:${accountInfos.user.clickLevel} |⚡ ${accountInfos.user.energy}:${accountInfos.user.maxEnergy}:${accountInfos.user.energyLevel}:${accountInfos.user.dailyEnergyRefill}`});
                        if(accountInfos.user.isBanned == false){
                              const totalclick = accountInfos.user.clickLevel*totalClick
                              const newstotalclick = accountInfos.user.energy/accountInfos.user.clickLevel
                              // console.log(accountInfos.user.energy+" | "+totalclick)
                              if(accountInfos.user.energy > totalclick){
                                  const getClicks = await getClick(getTokens.token,totalClick)
                                  // if(getClicks)
                                  // console.log(getClicks)
                                twisters.put(username,{
                                  text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy} | Success 🖱 ${getClicks.clicks} ⚡ ${getClicks.energy} 🪙 ${getClicks.coins} 🪫 ${getClicks.hasBoost}`});
              
                                  // check if available for click upgrade
                                  const getInfoUpgradeClicks = await getInfoUpgradeClick(getTokens.token)
                                  // console.log(getInfoUpgradeClicks)
                                  if(getClicks.coins > getInfoUpgradeClicks.level.upgradeCost){
                                      const upgradeClicks = await upgradeClick(getTokens.token)
                                      if(upgradeClicks.status == true){
                                          // console.log(upgradeClicks.user)
                                        twisters.put(username,{
                                          text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Success Upgrade 🖱 ${upgradeClicks.clickLevel} ⏭ Upgrade : Lv ${upgradeClicks.nextLevel.pointsPerClick} | 💰 ${upgradeClicks.nextLevel.upgradeCost}]`});
                                      }else{
                                        twisters.put(username,{
                                          text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Upgrade 🖱 Failed, ${upgradeClicks.error}...`});
                                      }
                                  }else{
                                    twisters.put(username,{
                                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  You don't have enought 🪙 to upgrade 🖱 ...`});
                                  }
                                  
                                  // check if available for energy upgrade
                                  const getInfoUpgradeEnergys = await getInfoUpgradeEnergy(getTokens.token)
                                  // console.log(getInfoUpgradeEnergys)
                                  if(getClicks.coins > getInfoUpgradeEnergys.level.upgradeCost){
                                      const upgradeEnergys = await upgradeEnergy(getTokens.token)
                                      if(upgradeEnergys.status == true){
                                          // console.log(upgradeEnergys.user)
                                        twisters.put(username,{
                                          text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Success Upgrade ⚡ ${upgradeEnergys.energyLevel} ⏭ Upgrade : Lv ${upgradeEnergys.nextLevel.maxEnergy} | 💰 ${upgradeEnergys.nextLevel.upgradeCost}]`});
                                      }else{
                                        twisters.put(username,{
                                          text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Upgrade ⚡ Failed, ${upgradeEnergys.error}...`});
                                      }
                                  }else{
                                    twisters.put(username,{
                                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  You don't have enought 🪙 to upgrade ⚡...`});
                                  }
              
                              }else{
                                // twisters.put(username,{
                                //   text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Your account not enought ⚡, try to claim daily ⚡...`});
                                  const getEnergys = await getEnergy(getTokens.token)
                                  if(getEnergys.status == true){
                                    twisters.put(username,{
                                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Success Refill ⚡: ${getEnergys.user.energy} ⏳ : ${getEnergys.user.lastRepareEnergy}`});
                                  }else{
                                    twisters.put(username,{
                                      text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}] 🏆 ${accountRankInfos.me.userRank} 🪙 ${accountInfos.user.coins} 🖱 ${accountInfos.user.clicks} ⚡ ${accountInfos.user.energy}  |  Error get⚡: ${getEnergys}...`});
                                  }
                              }
                        }else{
                          twisters.put(username,{
                            text: `[${moment().format("DD/MM/YY HH:mm:ss")}] [${accountInfos.user.fullName}]  Your account has been banned...`});
                        }
              }else{
                twisters.put(username,{
                  text: `[${moment().format("DD/MM/YY HH:mm:ss")}] Get Token Failed...`});
              }
            } catch (e) {
              // console.log(e)
                twisters.put(username,{
                  text: `[${moment().format("DD/MM/YY HH:mm:ss")}] Bad gateway : ${e}...`});
          }
          }))
          // Delay 0.5s for each loop
          await delay(500);
    }
})();
