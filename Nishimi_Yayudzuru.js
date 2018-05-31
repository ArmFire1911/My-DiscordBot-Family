﻿//啟動模組
const Discord = require('discord.js');
const client = new Discord.Client({ autoReconnect: true });
//於cmd回傳啟動訊息
client.on("ready", () => {
    //用於統計使用者
    console.log(`結弦回家囉!接觸了 ${client.users.size} 位成員，看到了 ${client.channels.size} 個頻道，加入了 ${client.guilds.size} 個伺服器`);
    client.user.setActivity(`陪ArmFire1911聊天`);
});
client.on('ready', () => {
    console.log(`以 ${client.user.tag}身分登入了!`);
});

//限制使用者使用的指令組
const userLock = ['結弦可愛', '這...這是給我的便當嗎?', '結弦最喜歡我了，對吧!', '那個女孩很可愛呢', '我回來了', '我回來了!', '結弦，拍照~', '結弦，拍照^^']
//限制不能於特定頻道使用的指令組
const channelLock = ['結弦help', 'Arm語錄', 'k哥語錄', '路易斯語錄', 'papa語錄', '蒼幻語錄', '樓下支援花心圖', '其他黑歷史']

//使用者記錄模組
let whoTrigger = {};

//內嵌式訊息模組
function createEmbed(data) {
    embed = new Discord.RichEmbed()
        .setTitle('西宮結弦')
        .setThumbnail(data.avatarURL)
        .setColor(16750026)
        .addField(data.embedTitle, data.embedContent)
        .setImage(data.pictureURL)
        .setFooter('來自結弦のIPhone')
        .setTimestamp();
    return embed;
}
//大頭貼網址變數
const AvatarURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//照片網址變數
const PictureURL = '/http[s]?:\/\/.+\.((jpeg)|(jpg)|(png)|(gif)|(bmp))/';
//內嵌對話框標題
const EmbedTitle = ' ';
//內嵌對話框內文
const EmbedContent = ' ';
//內容

const messageData = {
    //有第一層無第二層
    '結弦可愛': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '好噁心!不准靠近我四公尺以內! \n不…不過這樣子也有點可憐，不然你屏住呼吸可以再前進一公尺',
                pictureURL: ''
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '這...這是給我的便當嗎?': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '今天的便當，只是剛好有剩餘的食材才順手做的唷。 \n因為清理很麻煩，所以絕對不准你剩下來，知道了吧！',
                pictureURL: ''
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '結弦最喜歡我了，對吧!': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '別、別說傻話了……我我我都說沒有了不是嗎！？',
                pictureURL: ''
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '那個女孩很可愛呢': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '花心是不好的哦...對吧，惠勝 ^^ :knife::chicken:',
                pictureURL: ''
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '我回來了!': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/bb10UWY.jpg',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '你要先吃飯? \n還是先洗澡? \n還是先·吃·我?',
                pictureURL: ''
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '結弦，拍照~': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '如果是你要拍的話...好吧，只有一次喔!',
                pictureURL: 'https://i.imgur.com/3g8Y8jE.png'
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '結弦，拍照^^': {
        execute(message) {
            embedData = {
                avatarURL: 'https://i.imgur.com/vljAZT4.png',
                embedTitle: '[來自最可愛的老婆大人的訊息]',
                embedContent: '不...不行!絕對不行!!!!',
                pictureURL: 'https://i.imgur.com/kKxUFRr.jpg'
            }
            message.channel.send(createEmbed(embedData));
        }
    },
    '結弦help': {
        execute(message) {
            message.channel.send(
                '我所撰寫的這本書 *ACGN股民語錄集* 乃集ACGN股民眾多幹話、黑歷史於一身之曠世巨作，請選擇你要查看的冊目\n' +
                '語錄組：' +
                '```' +
                'Arm語錄\n' +
                '\n' +
                'Maruze語錄\n' +
                '\n' +
                'k哥語錄\n' +
                '\n' +
                '路易斯語錄\n' +
                '\n' +
                'papa語錄\n' +
                '\n' +
                '蒼幻語錄' +
                '```' +
                '黑歷史：' +
                '```' +
                '樓下支援花心圖\n' +
                '\n' +
                '其他黑歷史\n' +
                '```');
        },
    },
    //有第一層有同名第二層
    'Arm語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('Arm語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.整個股市都是我的後宮\n' +
                '02.人體榨汁機\n' +
                '03.在甘蔗汁店打工' +
                '```');
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '^^:knife::chicken:',
                        pictureURL: 'https://i.imgur.com/iJe1yjY.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '02': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: ':look_up:',
                        pictureURL: 'https://i.imgur.com/DtEzkdn.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '03': {
                execute(message) {
                    message.channel.send(
                        'ArmFire1911:\n' +
                        '```' +
                        '我之前是在甘蔗店打工的，而我榨甘蔗的原則是：\n' +
                        '\n' +
                        '沒錯，就是幹你娘榨爆，我才不管甚麼公司虧損三小的，每次榨的甘蔗就是姬芭一大杯。小杯榨成大杯，' +
                        '中杯榨成胖胖杯。胖胖杯買一送一，跟把整個店的甘蔗全送給你沒兩樣。\n' +
                        '\n' +
                        '我還記得，那個月上班25天，經理跑來跟我說，這個月甘蔗虧損二十六噸，你有頭緒嗎？\n' +
                        '\n' +
                        '我他媽的怎麼會知道。' +
                        '```'
                    );
                    delete whoTrigger[message.author];
                },
            },
        },
    },
    'k哥語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('k哥語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.張開你的嘴~靠近我雙腿~\n' +
                '02.來學校就是為了要...\n' +
                '03.我覺得禱輝一定有...\n' +
                '04.我幹過...\n' +
                '05.自己都不夠吸\n' +
                '06.幹，缺錢啦' +
                '```',
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/3oh9uYz.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '02': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/Wt3ggTS.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '03': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/sjtUBP8.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '04': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/36VtpKq.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '05': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/FoBhCkI.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '06': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '呷kㄝ肖年家~係禱灰~~~',
                        pictureURL: 'https://i.imgur.com/ajFuPl7.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        },
    },
    '路易斯語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('路易斯語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.加藤鷹的ㄋㄟㄋㄟ讚\n' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '口味真重...',
                        pictureURL: 'https://i.imgur.com/yYXxCNR.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        }
    },
    'papa語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('papa語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.性別不同怎麼談戀愛\n' +
                '02.只要是貓我都能%' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '股市甲甲papa狗',
                        pictureURL: 'https://i.imgur.com/KeSMJCy.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '02': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: ':噁心papa狗:',
                        pictureURL: 'https://i.imgur.com/WdKrZlc.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        },
    },
    '蒼幻語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('蒼幻語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.警察叔叔，就是這個警察!' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '查無不法，謝謝指教˙ˇ˙',
                        pictureURL: 'https://i.imgur.com/7Rp7fsR.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        },
    },
    'Maruze語錄': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('Maruze語錄');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.練肌肌\n' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '雞鴨!',
                        pictureURL: 'https://i.imgur.com/uc4kwl4.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        },
    },
    '樓下支援花心圖': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('樓下支援花心圖');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.花心尼\n' +
                '02.花心被打的阿尼\n' +
                '03.花心阿姆咪\n' +
                '04.阿姆咪的花心比較級' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '花心阿尼4ni',
                        pictureURL: 'https://i.imgur.com/dwmVnuX.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '02': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '花心被打的阿尼:look_up:',
                        pictureURL: 'https://i.imgur.com/606lQCP.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },

            '03': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '花心是不好的喔，Amulet1 ^^ :knife::chicken:',
                        pictureURL: 'https://i.imgur.com/Vx06cOp.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '04': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '花心是不好的喔，Amulet1 ^^ :knife::chicken:',
                        pictureURL: 'https://i.imgur.com/UYtMBUq.jpg'
                    };
                    message.channel.send(embedData ? createEmbed(embedData) : '沒有這個選項啦!');
                    delete whoTrigger[message.author];
                }
            },
        },
    },
    '其他黑歷史': {
        execute(message) {
            whoTrigger[message.author] = {
                useWhat: []
            };
            whoTrigger[message.author].useWhat.push('其他黑歷史');
            message.channel.send(
                '```' +
                '請輸入數字：\n' +
                '01.20噁男名單\n' +
                '02.色老頭' +
                '```'
            );
        },
        submessageData: {
            '01': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '20噁男嘔嘔嘔嘔偶',
                        pictureURL: 'https://i.imgur.com/evZLWQY.jpg'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
            '02': {
                execute(message) {
                    embedData = {
                        avatarURL: 'https://i.imgur.com/vljAZT4.png',
                        embedTitle: '[來自最可愛的結弦的訊息]',
                        embedContent: '蘿莉控色老頭，死刑!',
                        pictureURL: 'https://i.imgur.com/yNMYnve.png'
                    };
                    message.channel.send(createEmbed(embedData));
                    delete whoTrigger[message.author];
                }
            },
        },
    },
};

//禁止頻道模組
function forbid(channel) {
    if ((channel.name === '蒲團') || (channel.name === 'syaro與史蒂芬妮-多拉') || (channel.name === '股市鬧鐘bot') || (channel.name === 'bugs')
        || (channel.name === 'exchange-center') || (channel.name === 'countersigned') || (channel.name === 'lobby') || (channel.name === 'hall')
        || (channel.name === 'har_pt') || (channel.name === 'har_manager') || (channel.name === 'plans-rule-sugguestion') || (channel.name === 'product_center')
        || (channel.name === 'reports') || (channel.name === 'recieve_instantmessage') || (channel.name === '茶水間')) {
        return true;
    }
    else {
        return false;
    }
}
//許可使用者模組
function detect(author) {
    if ((author.id !== '374728300662226945')) {
        return true;
    }
    else {
        return false;
    }
};

//指令設定區
client.on('message', (msg) => {
    let lit, command;
    lit = msg.content;

    //偵測時間設定
    function timerCleanWhoTrigger() {
        whoTrigger[msg.author].timer = setTimeout(
            function () {
                delete whoTrigger[msg.author];
                msg.reply('不說話就不要吵我!')
            }
            , 5000
        );
    };
    function timerCleanWhoTriggerStop() {
        clearTimeout(whoTrigger[msg.author].timer);
    };

    //找出命令斷點
    command = lit.split(/\s/)[0];

    //使用者限制載入
    if (userLock.includes(command)) {
        if (detect(msg.author)) {
            return;
        }
    };
    //頻道限制模組載入
    if (channelLock.includes(command)) {
        if (forbid(msg.channel)) {
            return;
        }
    };
    //第一層
    if (messageData[command] !== undefined && whoTrigger[msg.author] === undefined) {
        messageData[command].execute(msg);
        if (whoTrigger[msg.author] !== undefined) {
            timerCleanWhoTrigger();
            //使用紀錄
            console.log(
                `${msg.author.username}(${msg.author})在${msg.channel}使用了: ${command}!`
            );
        }
    }
    //其他層
    else if (whoTrigger[msg.author] !== undefined && whoTrigger[msg.author].useWhat !== undefined) {
        timerCleanWhoTriggerStop();
        let commandHandler = messageData[whoTrigger[msg.author].useWhat[0]];
        for (let i = 1; i < whoTrigger[msg.author].useWhat.length; i++) {
            commandHandler = commandHandler.submessageData[whoTrigger[msg.author].useWhat[i]]
        }
        commandHandler = commandHandler.submessageData[command];
        if (commandHandler !== undefined) {
            commandHandler.execute(msg);
        }
        else {
            msg.reply('沒有這個選項啦!');
            delete whoTrigger[msg.author];
            //使用紀錄
            console.log(
                `${msg.author.username}(${msg.author})在${msg.channel}使用了: ${command}!`
            );
        }
    }
    //非法指令處理
    else {
        delete whoTrigger[msg.author];
    }
}
);

client.login(process.env['token']);