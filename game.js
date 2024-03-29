(function () {
    console.log("[JS] game.js has loaded")
    window.addEventListener("error", (e) => {
        alert(`An error has occurred, check the console for more information: "${e.message}" @${e.lineno}:${e.colno}`)
    })
    let canvas = document.querySelector("#game")
    document.addEventListener("dblclick", (e) => {
        e.preventDefault()
    }, { passive: false })
    function upd(to, from) {
        for (let id in to) {
            if (!(from[id])) {
                from[id] = to[id]
            } else if (typeof from[id] == "object") {
                upd(to[id], from[id])
            }
        }
        return from
    }
    let ach = {
        "tower2": {
            title: "Tower 2",
            desc: "Merge two Level 1 Towers together to get a Level 2.",
            rarity: "common",
            reward: {
                type: "money",
                amount: 1.01
            }
        },
        "tower3": {
            title: "Tower 3",
            desc: "Merge two Level 2 Towers together to get a Level 3.",
            rarity: "common",
            reward: {
                type: "money",
                amount: 1.02
            }
        },
        "tower4": {
            title: "Tower 4",
            desc: "Merge two Level 3 Towers together to get a Level 4.",
            rarity: "common",
            reward: {
                type: "money",
                amount: 1.04
            }
        },
        "tower5": {
            title: "Tower 5",
            desc: "Merge two Level 4 Towers together to get a Level 5.",
            rarity: "uncommon",
            reward: {
                type: "money",
                amount: 1.08
            }
        },
        "tower6": {
            title: "Tower 6",
            desc: "Merge two Level 5 Towers together to get a Level 6.",
            rarity: "uncommon",
            reward: {
                type: "money",
                amount: 1.16
            }
        },
        "tower7": {
            title: "Tower 7",
            desc: "Merge two Level 6 Towers together to get a Level 7.",
            rarity: "uncommon",
            reward: {
                type: "money",
                amount: 1.32
            }
        },
        "tower8": {
            title: "Tower 8",
            desc: "Merge two Level 7 Towers together to get a Level 8.",
            rarity: "epic",
            reward: {
                type: "money",
                amount: 1.64
            }
        },
        "tower9": {
            title: "Tower 9",
            desc: "Merge two Level 8 Towers together to get a Level 9.",
            rarity: "epic",
            reward: {
                type: "money",
                amount: 2.28
            }
        },
        "tower10": {
            title: "Tower 10",
            desc: "Merge two Level 9 Towers together to get a Level 10.",
            rarity: "epic",
            reward: {
                type: "money",
                amount: 3.56
            }
        },
        "tower11": {
            title: "Tower 11",
            desc: "Merge two Level 10 Towers together to get a Level 11.",
            rarity: "super",
            reward: {
                type: "money",
                amount: 6.12
            }
        },
        "tower12": {
            title: "Tower 12",
            desc: "Merge two Level 11 Towers together to get a Level 12.",
            rarity: "super",
            reward: {
                type: "money",
                amount: 11.24
            }
        },
        "tower13": {
            title: "Tower 13",
            desc: "Merge two Level 12 Towers together to get a Level 13.",
            rarity: "super",
            reward: {
                type: "money",
                amount: 21.48
            }
        },
        "tower14": {
            title: "Tower 14",
            desc: "Merge two Level 13 Towers together to get a Level 14.",
            rarity: "ledgendary",
            reward: {
                type: "money",
                amount: 41.96
            }
        },
        "tower15": {
            title: "Tower 15",
            desc: "Merge two Level 14 Towers together to get a Level 15.",
            rarity: "ledgendary",
            reward: {
                type: "money",
                amount: 82.92
            }
        },
        "tower16": {
            title: "Tower 16",
            desc: "Merge two Level 15 Towers together to get a Level 16. By having this achievement you have unlocked something that is to come...",
            rarity: "impossible",
            reward: {
                type: "money",
                amount: 164.84
            }
        },
        "thousand": {
            title: "Thousandaire",
            desc: "Have at least 1k money at once.",
            rarity: "common",
            reward: {
                type: "money",
                amount: 2
            }
        },
        "million": {
            title: "Millionaire",
            desc: "Have at least 1M money at once.",
            rarity: "uncommon",
            reward: {
                type: "money",
                amount: 4
            }
        },
        "billion": {
            title: "Billionaire",
            desc: "Have at least 1B money at once.",
            rarity: "epic",
            reward: {
                type: "money",
                amount: 8
            }
        },
        "trillion": {
            title: "Trillionaire",
            desc: "Have at least 1T money at once.",
            rarity: "super",
            reward: {
                type: "money",
                amount: 16
            }
        },
        "quadrillion": {
            title: "Quadrillionaire",
            desc: "Have at least 1Qd money at once.",
            rarity: "ledgendary",
            reward: {
                type: "money",
                amount: 32
            }
        },
        "quintrillion": {
            title: "Quintrillionaire",
            desc: "Have at least 1Qt money at once.",
            rarity: "impossible",
            reward: {
                type: "money",
                amount: 64
            }
        },
        "septillion": {
            title: "Septillionaire",
            desc: "Have at least 1Sp money at once.",
            rarity: "hidden",
            reward: {
                type: "money",
                amount: 128
            }
        },
        "hecker": {
            title: "You're a Hecker",
            desc: "You rebirthed without buying any upgrades. You hecker.",
            rarity: "hidden",
            reward: {
                type: "money",
                amount: 100
            }
        },
        "why": {
            title: "Why?",
            desc: "You destroyed your highest level tower. Why?",
            rarity: "hidden",
            reward: {
                type: "fs",
                amount: 1.1
            }
        },
        "uno": {
            title: "Uno",
            desc: "You rebirthed! Good job :)",
            rarity: "uncommon",
            reward: {
                type: "money",
                amount: 2
            }
        },
        "cinco": {
            title: "Cinco",
            desc: "You've rebirthed 5 times!",
            rarity: "epic",
            reward: {
                type: "money",
                amount: 5
            }
        },
        "quince": {
            title: "Quince",
            desc: "You've rebirthed 15 times!",
            rarity: "super",
            reward: {
                type: "money",
                amount: 25
            }
        },
        "cincuenta": {
            title: "Cincuenta",
            desc: "You've rebirthed 50 times!",
            rarity: "ledgendary",
            reward: {
                type: "money",
                amount: 125
            }
        },
        "doscientos-cincuenta": {
            title: "Doscientos Cincuenta",
            desc: "You've rebirthed 250 times! You should touch some grass tho...",
            rarity: "hidden",
            reward: {
                type: "money",
                amount: 625
            }
        }
    }
    //common uncommmon epic super ledgendary impossible hidden
    document.querySelector("#showach").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        document.querySelector("#ach").style.display = "block"
        document.querySelector("#settingsscreen").style.display = "none"
    })
    let ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
    document.querySelector("#mergemobile").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        merge()
    })
    document.querySelector("#settings").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        document.querySelector("#settingsscreen").style.display = "block"
    })
    let playbg = false
    let inspecting = -1
    document.addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        playbg = true
        if (game.settings[3] == "No Render") {
            return
        }
        inspecting = -1
        game.towers.forEach((v, i) => {
            const pos = getPos(i)
            const x = pos.x
            const y = pos.y
            if (Math.sqrt(Math.pow(e.clientX - x, 2) + Math.pow(e.clientY - y, 2)) < canvasmin / 12) {
                inspecting = i
            }
        })
    })
    document.querySelector("#statsell").addEventListener("click", (e) => {
        if (!(e.isTrusted) || game.towers.length < 2) {
            return
        }
        let c = confirm("Are you sure you want to destroy this tower? This can not be undone.")
        if (!(c)) {
            return
        }
        let g = true
        game.towers.forEach((v, i) => {
            if (v >= game.towers[inspecting] && i != inspecting) {
                g = false
            }
        })
        if (g) {
            grantAch("why")
        }
        game.towers.splice(inspecting, 1)
        inspecting = -1
    })
    let loadnames = ["Loading Scripts...", "Loading Asset 1/25", "Loading Asset 2/25", "Loading Asset 3/25", "Loading Asset 4/25", "Loading Asset 5/25", "Loading Asset 6/25", "Loading Asset 7/25", "Loading Asset 8/25", "Loading Asset 9/25", "Loading Asset 10/25", "Loading Asset 11/25", "Loading Asset 12/25", "Loading Asset 13/25", "Loading Asset 14/25", "Loading Asset 15/25", "Loading Asset 16/25", "Loading Asset 17/25", "Loading Asset 18/25", "Loading Asset 19/25", "Loading Asset 20/25", "Loading Asset 21/25", "Loading Asset 22/25", "Loading Asset 23/25", "Loading Asset 24/25", "Loading Asset 25/25", "Finishing Up..."]
    let currentload = 0
    function abbv(num) {
        if (num == 0) {
            return "0"
        }
        if (num < 1000) {
            return num.toFixed(2) / 1
        }
        if (num == Infinity) {
            return "inf"
        }
        num = num.toFixed(2)
        let len = 0
        while (num / Math.pow(10, len) >= 1) {
            len += 1
        }
        let a = ["", "k", "M", "B", "T", "Qd", "Qt", "Sp", "Sx", "Oct", "Nn", "Dc", "Und", "Dd", "Tdc", "Qtrd", "Sxdc", "Spdc", "Ocdc", "Nvdc", "Vg", "Uvg", "Dvg", "Qtvg", "Qnvg", "Sxvg", "Spvg", "Ocvg", "Nnvg", "Tgvg", "Utvg", "Dtvg"]
        return (num / Math.pow(1000, Math.floor((len - 1) / 3))).toFixed(2) / 1 + a[Math.floor((len - 1) / 3)]
    }
    let loader = {
        loadedAssets: {},
        loadQue: [],
        loadSrc: function (src, name, type) {
            loader.loadQue.push({ src: src, name: name, img: null, type: type })
        }
    }
    loader.loadSrc("images/center0.png", "center0", "img")
    loader.loadSrc("images/center1.png", "center1", "img")
    loader.loadSrc("images/center2.png", "center2", "img")
    loader.loadSrc("images/center3.png", "center3", "img")
    loader.loadSrc("images/center4.png", "center4", "img")
    loader.loadSrc("images/tower0.png", "tower0", "img")
    loader.loadSrc("images/tower1.png", "tower1", "img")
    loader.loadSrc("images/tower2.png", "tower2", "img")
    loader.loadSrc("images/tower3.png", "tower3", "img")
    loader.loadSrc("images/tower4.png", "tower4", "img")
    loader.loadSrc("images/tower5.png", "tower5", "img")
    loader.loadSrc("images/tower6.png", "tower6", "img")
    loader.loadSrc("images/tower7.png", "tower7", "img")
    loader.loadSrc("images/tower8.png", "tower8", "img")
    loader.loadSrc("images/tower9.png", "tower9", "img")
    loader.loadSrc("images/tower10.png", "tower10", "img")
    loader.loadSrc("images/tower11.png", "tower11", "img")
    loader.loadSrc("images/tower12.png", "tower12", "img")
    loader.loadSrc("images/tower13.png", "tower13", "img")
    loader.loadSrc("images/tower14.png", "tower14", "img")
    loader.loadSrc("images/tower15.png", "tower15", "img")
    loader.loadSrc("images/bullet0-4.png", "bullet04", "img")
    loader.loadSrc("images/bullet5-15.png", "bullet515", "img")
    loader.loadSrc("audio/bg0.mp3", "bg0", "audio")
    loader.loadSrc("audio/bg1.mp3", "bg1", "audio")
    loader.loadSrc("audio/bg2.mp3", "bg2", "audio")
    // REMEMBER TO ADD IT
    // TO REBIRTHING CODE
    // ASWELL TO PREVENT BUGS
    let resetto = {
        money: 0,
        towers: [0],
        towersbought: 0,
        baselevel: 0,
        currentmult: 0,
        towermax: 0,
        rebirths: 0,
        upgs: {
            firespeed: 0,
            money: 0,
            rebirth: 0,
            offlinetime: 0
        },
        stats: {
            timesrebirthed: 0
        },
        lastonline: Date.now(),
        //0: music, 1: soundfx, 2: mergebutton, 3: graphics
        settings: ["On", "On", "False", "Default"],
        ach: []
    }
    let game = !(localStorage.getItem("gdata") == null) ? JSON.parse(localStorage.getItem("gdata")) : { ...resetto }
    upd(resetto, game)
    document.querySelectorAll(".settingsselect").forEach((v, i) => {
        v.setAttribute("data-value", v.getAttribute("data-options").split(",").indexOf(game.settings[i]) + "")
        v.innerHTML = v.getAttribute("data-options").split(",")[v.getAttribute("data-value")]
        v.addEventListener("click", (e) => {
            if (!(e.isTrusted)) {
                return
            }
            v.setAttribute("data-value", v.getAttribute("data-value") == "" + (v.getAttribute("data-options").split(",").length - 1) ? "0" : Number(v.getAttribute("data-value")) + 1 + "")
            v.innerHTML = v.getAttribute("data-options").split(",")[Number(v.getAttribute("data-value"))]
            game.settings[i] = v.getAttribute("data-options").split(",")[Number(v.getAttribute("data-value"))]
        })
    })
    document.querySelector("#offline").style.display = "none"
    if (game.lastonline + 5000 < Date.now() && game.upgs.offlinetime != 0) {
        let overall = 0
        game.towers.forEach((v) => {
            overall += Math.pow(3, v) / Math.pow(1.1, game.upgs.firespeed)
        })
        game.money += overall * Math.pow(1.1, game.upgs.money) * 0.5 * Math.pow(5, game.currentmult) * Math.min((Date.now() - game.lastonline) / 1000, game.upgs.offlinetime == 0 ? 0 : (game.upgs.offlinetime * 10 + 20) * 60)
        document.querySelector("#offlinetitle").innerHTML = "You were gone for " + Math.min(Math.ceil((Date.now() - game.lastonline) / 60000), game.upgs.offlinetime == 0 ? 0 : game.upgs.offlinetime * 10 + 20) + "m" + ((Date.now() - game.lastonline) / 1000 > (game.upgs.offlinetime * 10 + 20) * 60 ? "(MAX)" : "") + "!"
        document.querySelector("#offlinemoney").innerHTML = "In that time you made $" + abbv(overall * Math.pow(1.1, game.upgs.money) * 0.5 * Math.pow(5, game.currentmult) * Math.min((Date.now() - game.lastonline) / 1000, game.upgs.offlinetime == 0 ? 0 : (game.upgs.offlinetime * 10 + 20) * 60)) + "."
        document.querySelector("#offline").style.display = "block"
    }
    document.querySelector("#towerbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.money >= 10 * Math.pow(1.1, game.towersbought) && game.towers.length < 8 * (game.towermax + 1)) {
            game.money -= 10 * Math.pow(1.1, game.towersbought)
            game.towersbought += 1
            game.towers.push(game.baselevel)
        }
    })
    document.querySelector("#basebuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.money >= 1000 * Math.pow(10, game.baselevel) && game.baselevel < 15) {
            game.money -= 1000 * Math.pow(10, game.baselevel)
            game.baselevel += 1
        }
    })
    document.querySelector("#centerbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.money >= 1000000 * Math.pow(100, game.currentmult) && game.currentmult < 4) {
            game.money -= 1000000 * Math.pow(100, game.currentmult)
            game.currentmult += 1
        }
    })
    document.querySelector("#maxbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.money >= 500 * Math.pow(1000, game.towermax)) {
            game.money -= 500 * Math.pow(1000, game.towermax)
            game.towermax += 1
        }
    })
    document.querySelector("#upgrades").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        document.querySelector("#upgscreen").style.display = "block"
    })
    document.querySelector("#fsbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.rebirths >= 1 + game.upgs.firespeed) {
            game.rebirths -= 1 + game.upgs.firespeed
            game.upgs.firespeed += 1
        }
    })
    document.querySelector("#mmbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.rebirths >= 1 + game.upgs.money) {
            game.rebirths -= 1 + game.upgs.money
            game.upgs.money += 1
        }
    })
    document.querySelector("#rbpbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.rebirths >= 1 + game.upgs.rebirth) {
            game.rebirths -= 1 + game.upgs.rebirth
            game.upgs.rebirth += 1
        }
    })
    document.querySelector("#oltbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.rebirths >= 1 + game.upgs.offlinetime) {
            game.rebirths -= 1 + game.upgs.offlinetime
            game.upgs.offlinetime += 1
        }
    })
    let towercool = []
    let bulletdata = []
    let zoom = 1
    let tozoom = 1
    let version = "v1"
    let ctx = canvas.getContext("2d")
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    function fireBullet(idx) {
        const pos = {
            x: canvas.width / 2 + Math.sin((Date.now() + idx * Math.PI / 4 * 7500 + Math.floor(idx / 8) * Math.PI / 16 * 7500) / 7500) * (canvasmin / 4) * (Math.floor(idx / 8) + 1),
            y: canvas.height / 2 + Math.cos((Date.now() + idx * Math.PI / 4 * 7500 + Math.floor(idx / 8) * Math.PI / 16 * 7500) / 7500) * (canvasmin / 4) * (Math.floor(idx / 8) + 1)
        }
        bulletdata.push({
            x: pos.x,
            y: pos.y,
            id: game.towers[idx]
        })
        towercool[idx] = Date.now() + (1000 / (Math.pow(1.1, game.upgs.firespeed) * achBoost("fs")))
    }
    function getPos(idx) {
        return {
            x: canvas.width / 2 + Math.sin((Date.now() + idx * Math.PI / 4 * 7500 + Math.floor(idx / 8) * Math.PI / 16 * 7500) / 7500) * (canvasmin / 4) * (Math.floor(idx / 8) + 1),
            y: canvas.height / 2 + Math.cos((Date.now() + idx * Math.PI / 4 * 7500 + Math.floor(idx / 8) * Math.PI / 16 * 7500) / 7500) * (canvasmin / 4) * (Math.floor(idx / 8) + 1)
        }
    }
    let prevloop = new Date()
    let fps = 60
    let canvasmin;
    let buffer = false
    let rebirthing = false
    let currentbg;
    let prevbg = -1
    document.querySelector("#rebirthbuy").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (game.money >= 500000000 * Math.pow(1.25, game.stats.timesrebirthed)) {
            rebirthing = true
            document.querySelector("#rebirthtext").innerHTML = "Rebirthing...<br><i>+" + (1 + game.upgs.rebirth) + " Rebirth Points</i>"
            document.querySelector("#rebirthed").style.display = "block"
            document.querySelector("#rebirthed").animate([{ opacity: 0 }, { opacity: 1 }], { fill: "forwards", iterations: 1, duration: 1000 })
            setTimeout(() => {
                game.stats.timesrebirthed += 1
                grantAch("uno")
                if (game.stats.timesrebirthed >= 5) {
                    grantAch("cinco")
                }
                if (game.stats.timesrebirthed >= 15) {
                    grantAch("quince")
                }
                if (game.stats.timesrebirthed >= 50) {
                    grantAch("cincuenta")
                }
                if (game.stats.timesrebirthed >= 250) {
                    grantAch("doscientos-cincuenta")
                }
                if (game.baselevel == 0 && game.currentmult == 0 && game.towermax == 0) {
                    grantAch("hecker")
                }
                resetto = {
                    money: 0,
                    towers: [0],
                    towersbought: 0,
                    baselevel: 0,
                    currentmult: 0,
                    towermax: 0,
                    rebirths: game.rebirths + 1 + game.upgs.rebirth,
                    upgs: { ...game.upgs },
                    stats: { ...game.stats },
                    lastonline: game.lastonline / 1,
                    settings: game.settings,
                    ach: [...game.ach]
                }
                bulletdata = []
                game = { ...resetto }
                document.querySelector("#upgscreen").style.display = "none"
                let anim = document.querySelector("#rebirthed").animate([{ opacity: 1 }, { opacity: 0 }], { fill: "forwards", iterations: 1, duration: 1000 })
                anim.onfinish = function () {
                    document.querySelector("#rebirthed").style.display = "none"
                    rebirthing = false
                }
            }, 2500)
        }
    })
    function loaded() {
        currentload += 1
        if (loader.loadQue[0]) {
            loader.loadedAssets[loader.loadQue[0].name] = loader.loadQue[0].img
            loader.loadQue.splice(0, 1)
        }
        if (loader.loadQue[1]) {
            if (loader.loadQue[1].type == "img") {
                loader.loadQue[1].img = new Image()
                loader.loadQue[1].img.src = loader.loadQue[1].src
                loader.loadQue[1].img.onload = loaded
            } else {
                loader.loadQue[1].img = new Audio(loader.loadQue[1].src)
                loader.loadQue[1].img.onloadeddata = loaded
            }
        }
    }
    function drawImgRotation(img, x, y, sx, sy) {
        if (!(img) || game.settings[3] == "No Render") {
            return
        }
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x))
        ctx.drawImage(img, -sx / (23 / 15) / 2, -sy / 2, sx, sy)
        ctx.restore()
    }
    function render() {
        let nowloop = new Date()
        fps = 1000 / (nowloop - prevloop)
        prevloop = nowloop
        document.querySelector("#fps").innerHTML = Math.floor(fps)
        if (loader.loadQue.length == 0) {
            document.querySelector("#loadingtext").innerHTML = "Finishing Up..."//loadnames[currentload]
            document.querySelector("#loading").style.opacity = 0
            if (!(buffer)) {
                buffer = true
                setTimeout(() => {
                    document.querySelector("#loading").style.display = "none"
                }, 1000)
            }
        } else {
            if (!(loader.loadQue[0].img)) {
                if (loader.loadQue[0].type == "img") {
                    loader.loadQue[0].img = new Image()
                    loader.loadQue[0].img.src = loader.loadQue[0].src
                } else {
                    loader.loadQue[0].img = new Audio(loader.loadQue[0].src)
                }
            }
            if (loader.loadQue[0].type == "img") {
                loader.loadQue[0].img.onload = loaded
            } else {
                loader.loadQue[0].img.oncanplay = loaded
            }
            document.querySelector("#loadingtext").innerHTML = loadnames[currentload]
        }
        if (currentload >= loadnames.length - 1) {
            zoom += (tozoom - zoom) / 5
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            canvasmin = Math.min(canvas.width, canvas.height) / zoom
            ctx.fillStyle = "rgb(255,255,255)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            game.towers.forEach((v, i) => {
                const pos = getPos(i)
                drawImgRotation(loader.loadedAssets["tower" + v], pos.x, pos.y, (canvasmin / 6) * (23 / 15), (canvasmin / 6))
                if (!(towercool[i])) {
                    towercool[i] = Date.now() + (1000 / Math.pow(1.1, game.upgs.firespeed))
                }
                if (towercool[i] <= Date.now()) {
                    fireBullet(i)
                }
            })
            bulletdata.forEach((v, i) => {
                if (Math.sqrt(Math.pow(canvas.width / 2 - v.x, 2) + Math.pow(canvas.height / 2 - v.y, 2)) <= canvasmin / 6) {
                    game.money += (Math.pow(3, v.id) * Math.pow(5, game.currentmult) * Math.pow(1.1, game.upgs.money) * achBoost("money")) * Math.max(1, Math.pow(1.1, game.upgs.firespeed) * achBoost("fs"))
                    delete bulletdata[i]
                }
                let x = v.x
                let y = v.y
                const rotation = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
                x += Math.cos(rotation) * canvasmin / 50
                y += Math.sin(rotation) * canvasmin / 50
                v.x = x
                v.y = y
                if (game.settings[3] == "Default") {
                    drawImgRotation(v.id <= 4 ? loader.loadedAssets["bullet04"] : loader.loadedAssets["bullet515"], x, y, (canvasmin / 6) * (23 / 15), (canvasmin / 6))
                }
            })
            ctx.fillStyle = "black"
            document.querySelector("#money").innerHTML = "$" + abbv(game.money) + " (" + abbv(Math.pow(5, game.currentmult) * Math.pow(1.1, game.upgs.money) * achBoost("money")) + "x)"
            if (!(game.settings[3] == "No Render")) {
                ctx.drawImage(loader.loadedAssets["center" + game.currentmult], (canvas.width - (canvasmin / 8 + Math.sin(Date.now() / 500) * (canvasmin / 30))) / 2, (canvas.height - (canvasmin / 8 + Math.sin(Date.now() / 500) * (canvasmin / 30))) / 2, ((canvasmin / 8 + Math.sin(Date.now() / 500) * (canvasmin / 30))), ((canvasmin / 8 + Math.sin(Date.now() / 500) * (canvasmin / 30))))
            }
            tozoom = Math.max(1, (Math.ceil(game.towers.length / 8) * (Math.min(canvas.width, canvas.height) / 4)) / Math.min(canvas.width, canvas.height) * 3)
            document.querySelector("#towerbuy").innerHTML = "$" + abbv(10 * Math.pow(1.1, game.towersbought))
            document.querySelector("#towertext").innerHTML = "Buy L" + (game.baselevel + 1) + " Tower"
            document.querySelector("#basebuy").innerHTML = game.baselevel < 15 ? ("$" + abbv(1000 * Math.pow(10, game.baselevel))) : "MAX"
            document.querySelector("#centerbuy").innerHTML = game.currentmult < 4 ? ("$" + abbv(1000000 * Math.pow(100, game.currentmult))) : "MAX"
            document.querySelector("#mergemobile").style.bottom = "calc(2vmin + " + document.querySelector("#maxupg").clientHeight + "px)"
            document.querySelector("#maxbuy").innerHTML = "$" + abbv(500 * Math.pow(1000, game.towermax))
            document.querySelector("#max").innerHTML = game.towers.length + " / " + (8 * (game.towermax + 1))
            document.querySelector("#max").style.color = game.towers.length == (8 * (game.towermax + 1)) ? "red" : "black"
            document.querySelector("#upgrades").style.bottom = "calc(2vmin + " + document.querySelector("#towerbox").clientHeight + "px)"
            let h = 0
            document.querySelectorAll(".upgitem").forEach((v, i) => {
                v.style.top = `calc(${7 + i}vmin + ${h}px)`
                h += v.clientHeight
            })
            let iv = 0
            document.querySelectorAll(".achitem").forEach((v, i) => {
                if (v.style.display == "none") {
                    iv += 1
                }
                v.style.top = `calc(${7 + i - iv}vmin + ${h}px)`
                h += v.clientHeight
            })
            document.querySelector("#rebirthbuy").innerHTML = "$" + abbv(500000000 * Math.pow(1.25, game.stats.timesrebirthed))
            document.querySelector("#upgpoints").innerHTML = abbv(game.rebirths) + " Point" + (game.rebirths == 1 ? "" : "s")
            document.querySelector("#fsbuy").innerHTML = abbv(1 + game.upgs.firespeed) + " Point" + (game.upgs.firespeed + 1 == 1 ? "" : "s")
            document.querySelector("#mmbuy").innerHTML = abbv(1 + game.upgs.money) + " Point" + (game.upgs.money + 1 == 1 ? "" : "s")
            document.querySelector("#rbpbuy").innerHTML = abbv(1 + game.upgs.rebirth) + " Point" + (game.upgs.rebirth + 1 == 1 ? "" : "s")
            document.querySelector("#oltbuy").innerHTML = abbv(1 + game.upgs.offlinetime) + " Point" + (game.upgs.offlinetime + 1 == 1 ? "" : "s")
            document.querySelector("#fsname").innerHTML = "+10% Firing Speed (" + abbv(Math.pow(1.1, game.upgs.firespeed)) + "x)"
            document.querySelector("#mmname").innerHTML = "+10% Money (" + abbv(Math.pow(1.1, game.upgs.money)) + "x)"
            document.querySelector("#rbpname").innerHTML = "+1 Rebirth Points (+" + abbv(game.upgs.rebirth) + ")"
            document.querySelector("#oltname").innerHTML = "+10m Offline Time (" + (game.upgs.offlinetime == 0 ? 0 : abbv(game.upgs.offlinetime * 10 + 20)) + "m)"
            if (playbg && currentbg == null) {
                currentbg = Math.floor(Math.random() * 3)
                loader.loadedAssets["bg" + currentbg].volume = 1
                if (!(currentbg == prevbg)) {
                    loader.loadedAssets["bg" + currentbg].play()
                    loader.loadedAssets["bg" + currentbg].onended = () => {
                        prevbg = currentbg
                        currentbg = null
                    }
                } else {
                    currentbg = null
                }
            }
            if (game.settings[0] == "Off" && playbg && !(currentbg == null)) {
                loader.loadedAssets["bg" + currentbg].pause()
            } else if (game.settings[0] == "On" && playbg && !(currentbg == null)) {
                loader.loadedAssets["bg" + currentbg].play()
            }
            document.querySelector("#towerstats").style.display = (inspecting == -1 ? "none" : "block")
            document.querySelector("#towerstats").style.left = (inspecting == -1 ? 0 : getPos(inspecting).x) + "px"
            document.querySelector("#towerstats").style.top = (inspecting == -1 ? 0 : getPos(inspecting).y) + "px"
            document.querySelector("#statlvl").innerHTML = "lvl: " + (1 + game.towers[inspecting == -1 ? 0 : inspecting])
            document.querySelector("#statdamage").innerHTML = "damage: " + abbv(Math.pow(3, game.towers[inspecting == -1 ? 0 : inspecting]))
            document.querySelector("#statfs").innerHTML = "speed: " + abbv(Math.pow(1.1, game.upgs.firespeed) * achBoost("fs")) + "/s"
            if (ismobile || game.settings[2] == "True") {
                document.querySelector("#mergemobile").style.display = "block"
            } else {
                document.querySelector("#mergemobile").style.display = "none"
            }
            if ((inspecting == -1 ? 0 : getPos(inspecting).x) > canvas.width / 2) {
                document.querySelector("#towerstats").className = "left"
            } else {
                document.querySelector("#towerstats").className = ""
            }
            for (a in ach) {
                if (game.ach.includes(a)) {
                    document.querySelector("#achid" + a).classList.add("achyes")
                    document.querySelector("#achid" + a).classList.remove("achno")
                    document.querySelector("#achid" + a).style.display = "block"
                } else {
                    if (ach[a].rarity == "hidden") {
                        document.querySelector("#achid" + a).style.display = "none"
                    } else {
                        document.querySelector("#achid" + a).classList.remove("achyes")
                        document.querySelector("#achid" + a).classList.add("achno")
                        document.querySelector("#achid" + a).style.display = "block"
                    }
                }
            }
            if (game.money >= 1e3) {
                grantAch("thousand")
            }
            if (game.money >= 1e6) {
                grantAch("million")
            }
            if (game.money >= 1e9) {
                grantAch("billion")
            }
            if (game.money >= 1e12) {
                grantAch("trillion")
            }
            if (game.money >= 1e15) {
                grantAch("quadrillion")
            }
            if (game.money >= 1e18) {
                grantAch("quintrillion")
            }
            if (game.money >= 1e21) {
                grantAch("septillion")
            }
            game.lastonline = Date.now()
        }
        localStorage.setItem("gdata", JSON.stringify(game))
        requestAnimationFrame(render)
    }
    for (a in ach) {
        let c = document.querySelector(".achitem").cloneNode(true)
        c.id = "achid" + a
        c.querySelector(".achtitle").innerHTML = ach[a].title + " (" + ach[a].rarity + ")"
        c.querySelector(".achtitle").classList.add("rarity-" + ach[a].rarity)
        c.querySelector(".achdesc").innerHTML = ach[a].desc
        c.querySelector(".achstat").innerHTML = "+" + (abbv(ach[a].reward.amount)) + "x " + (ach[a].reward.type == "money" ? "Money" : ach[a].reward.type == "fs" ? "Firing Speed" : "undefined")
        document.querySelector("#ach").appendChild(c)
    }
    document.querySelector(".achitem").remove()
    function merge() {
        inspecting = -1
        if (game.towers.length < 2) {
            return
        }
        let alrmerged = new Array(game.towers.length).map((v, i) => {
            alrmerged[i] = false
        })
        game.towers.forEach((v, i) => {
            game.towers.forEach((x, z) => {
                if (game.towers[i] == game.towers[z] && !(game.towers[i] == -1) && !(i == z) && !(alrmerged[i] || alrmerged[z]) && !(game.towers[i] == 15)) {
                    game.towers[i] = -1
                    game.towers[z] += 1
                    alrmerged[z] = true
                }
            })
            if (!(v == 0)) {
                grantAch("tower" + (v + 1))
            }
        })
        for (let i = 0; i < game.towers.length; i++) {
            if (game.towers[i] == -1) {
                game.towers.splice(i, 1)
                i--
            }
        }
    }
    document.addEventListener("keydown", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        if (e.key == " ") {
            merge()
        }
    })
    function reverse(s) {
        return s.split("").reverse().join("")
    }
    document.querySelector("#savegame").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        let c = document.createElement("a")
        let f = new File([reverse(btoa(reverse(btoa(JSON.stringify(game)))))], "save.txt", { type: "text/plain" })
        let u = URL.createObjectURL(f)
        c.href = u
        c.download = f.name
        c.click()
        URL.revokeObjectURL(u)
        c.remove()
    })
    document.querySelector("#opengame").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        document.querySelector("#upload").click()
    })
    document.querySelector("#upload").onchange = function (e) {
        let fr = new FileReader()
        fr.readAsText(this.files[0])
        fr.onload = function (e) {
            let g = JSON.parse(atob(reverse(atob(reverse(e.target.result)))))
            if (!(g)) {
                alert("Your save file is corrupted.")
                return
            }
            let c = confirm("Are you sure you want to use this save file? Your current save will be lost.")
            if (!(c)) {
                return
            }
            console.log(g)
            upd(resetto, g)
            game = { ...g }
            document.querySelector("#settingsscreen").style.display = "none"
            alert("Save file has been loaded successfully.")
        }
    }
    document.querySelector("#restart").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        let c = prompt("Are you sure you want to reset your game? Everything will be reset, this can not be undone. Type 'I WANT TO RESET' to reset.")
        if (c == "I WANT TO RESET") {
            bulletdata = []
            game = {
                money: 0,
                towers: [0],
                towersbought: 0,
                baselevel: 0,
                currentmult: 0,
                towermax: 0,
                rebirths: 0,
                upgs: {
                    firespeed: 0,
                    money: 0,
                    rebirth: 0,
                    offlinetime: 0
                },
                stats: {
                    timesrebirthed: 0
                },
                lastonline: Date.now(),
                //0: music, 1: soundfx, 2: mergebutton, 3: graphics
                settings: ["On", "On", "False", "Default"],
                ach: []
            }
            document.querySelector("#settingsscreen").style.display = "none"
            alert("Your game has been reset.")
        } else {
            alert("Game reset has been cancelled.")
        }
    })
    function grantAch(id) {
        if (!(game.ach.includes(id))) {
            game.ach.push(id)
            let c = document.querySelector("#achievement").cloneNode(true)
            c.style.display = "block"
            c.querySelector("#atitle").innerHTML = ach[id].title
            c.querySelector("#atitle").classList.add("rarity-" + ach[id].rarity)
            c.querySelector("#adesc").innerHTML = ach[id].desc
            document.querySelector("#achholder").appendChild(c)
        }
    }
    function achBoost(t) {
        if (!(t == "money" || t == "fs")) {
            return 1
        }
        let total = 1
        for (id in ach) {
            if (ach[id].reward.type == t && game.ach.includes(id)) {
                total += ach[id].reward.amount - 1
            }
        }
        return total
    }
    document.querySelector("#refundpoints").addEventListener("click", (e) => {
        if (!(e.isTrusted)) {
            return
        }
        let add = 0
        for (let id in game.upgs) {
            for (let i = 0; i < game.upgs[id]; i++) {
                add += (i + 1)
            }
            game.upgs[id] = 0
        }
        game.rebirths += add
    })
    render()
})()
/*
// Bosses ig
*/