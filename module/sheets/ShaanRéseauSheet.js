import * as Dice from "../jets/dice.js";

export default class ShaanRéseauSheet extends ActorSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;
        return options.classes = [...options.classes, "Réseau"], options.width = 750, options.height = 800, options.scrollY.push(".sheet-body"), options.tabs = [{

            navSelector: ".sheet-navigation",
            contentSelector: ".sheet-content",
            initial: "character"
        }], options
    }
    get template(){
        return `systems/shaanrenaissance/templates/actors/${this.actor.type}/sheet.hbs`;
    }
    async getData(options = this.options) {
        options.id || (options.id = this.id);
        const actorData = this.actor.toObject(!1),
            sheetData = {
                cssClass: this.actor.isOwner ? "editable" : "locked",
                editable: this.isEditable,
                document: this.actor,
                limited: this.actor.limited,
                owner: this.actor.isOwner,
                title: this.title,
                actor: actorData,
                data: actorData.system,
                items: actorData.items,
                config: CONFIG.shaanRenaissance,
                user: {
                    isGM: game.user.isGM
                },
            };
            if (typeof actorData.items.filter(function (item) {return item.system.pouvoir}) !== 'undefined') {
                sheetData.items.Category = {},
                sheetData.items.Category.Armement = actorData.items.filter(function (item) { return item.type == "Armement" }),
                sheetData.items.Category.Armimales = actorData.items.filter(function (item) { return item.type == "Armimale" }),
                sheetData.items.Category.Artefacts = actorData.items.filter(function (item) { return item.type == "Artefact" }),
                sheetData.items.Category.Manuscrits = actorData.items.filter(function (item) { return item.type == "Manuscrit" }),
                sheetData.items.Category.Outils = actorData.items.filter(function (item) { return item.type == "Outil" }),
                sheetData.items.Category.Protections = actorData.items.filter(function (item) { return item.type == "Protection" }),
                sheetData.items.Category.Relations = actorData.items.filter(function (item) { return item.type == "Relation" }),
                sheetData.items.Category.Richesses = actorData.items.filter(function (item) { return item.type == "Richesse" }),
                sheetData.items.Category.Technologie = actorData.items.filter(function (item) { return item.type == "Technologie" }),
                sheetData.items.Category.Transports = actorData.items.filter(function (item) { return item.type == "Transport" });
                sheetData.items.Category.Bâtiments = actorData.items.filter(function (item) { return item.type == "Bâtiment" });
                sheetData.SummonedTrihns = actorData.items.filter(function (item) { return item.type == "Trihn"});

                sheetData.pouvoirEsprit = actorData.items.filter(function (item) { return item.type = "Pouvoir" && item.system.trihn == "Esprit" || item.system.pouvoir.value == "Astuce de Technique" || item.system.pouvoir.value == "Secret de Savoir" || item.system.pouvoir.value == "Privilège de Social"}),
                sheetData.pouvoirAme = actorData.items.filter(function (item) { return item.type = "Pouvoir" && item.system.trihn == "Âme" || item.system.pouvoir.value == "Création d'Arts" || item.system.pouvoir.value == "Symbiose de Shaan" || item.system.pouvoir.value == "Sort de Magie"}),
                sheetData.pouvoirCorps = actorData.items.filter(function (item) { return item.type = "Pouvoir" && item.system.trihn == "Corps" || item.system.pouvoir.value == "Transe de Rituels" || item.system.pouvoir.value == "Exploit de Survie" || item.system.pouvoir.value == "Tactique de Combat"}),
                sheetData.pouvoirNecrose = actorData.items.filter(function (item) { return item.type = "Pouvoir" && item.system.trihn == "Nécrose" || item.system.pouvoir.value == "Tourment de Nécrose"});
        
            }
            if (typeof sheetData.data.attributes.hpEsprit !== "undefined") {
                sheetData.data.attributes.hpEsprit.max = (Math.max(sheetData.data.skills.Technique.rank, sheetData.data.skills.Savoir.rank, sheetData.data.skills.Social.rank)) + (Math.min(sheetData.data.skills.Technique.rank, sheetData.data.skills.Savoir.rank, sheetData.data.skills.Social.rank))
                sheetData.data.attributes.hpAme.max = (Math.max(sheetData.data.skills.Arts.rank, sheetData.data.skills.Shaan.rank, sheetData.data.skills.Magie.rank)) + (Math.min(sheetData.data.skills.Arts.rank, sheetData.data.skills.Shaan.rank, sheetData.data.skills.Magie.rank))
                sheetData.data.attributes.hpCorps.max = (Math.max(sheetData.data.skills.Rituels.rank, sheetData.data.skills.Survie.rank, sheetData.data.skills.Combat.rank)) + (Math.min(sheetData.data.skills.Rituels.rank, sheetData.data.skills.Survie.rank, sheetData.data.skills.Combat.rank))
                let attributes = sheetData.data.attributes
                if(attributes.hpEsprit.value > attributes.hpEsprit.max) {
                    this.actor.update({
                        data: {
                            attributes:{
                                hpEsprit: {
                                    value: attributes.hpEsprit.max
                                }
                            }
                        }
                    })
                }
                if(attributes.hpAme.value > attributes.hpAme.max) {
                    this.actor.update({
                        data: {
                            attributes:{
                                hpAme: {
                                    value: attributes.hpAme.max
                                }
                            }
                        }
                    })
                }
                if(attributes.hpCorps.value > attributes.hpCorps.max) {
                    this.actor.update({
                        data: {
                            attributes:{
                                hpCorps: {
                                    value: attributes.hpCorps.max
                                }
                            }
                        }
                    })
                }
                // Initiative
                const domain = sheetData.data.attributes.initiative.statistic,
                domainValue = actorData.system.skills[domain].rank + actorData.system.skills[domain].temp;
                sheetData.data.attributes.initiative.value = domainValue
                if(game.actors.get(actorData._id)) {
                    game.actors.get(actorData._id).getRollData().attributes.initiative.value = domainValue
                }
            }
            sheetData.enrichedTypeMembres = await TextEditor.enrichHTML(getProperty(this.actor.system, "typesMembres"), {async: true})
            sheetData.enrichedMotivations = await TextEditor.enrichHTML(getProperty(this.actor.system, "motivation"), {async: true})
            sheetData.enrichedMoyens = await TextEditor.enrichHTML(getProperty(this.actor.system, "moyens"), {async: true})    
            sheetData.enrichedNotes = await TextEditor.enrichHTML(getProperty(this.actor.system, "biography.campagne.notes"), {async: true})
            sheetData.enrichedAllies = await TextEditor.enrichHTML(getProperty(this.actor.system, "biography.campagne.allies"), {async: true})
            sheetData.enrichedEnemies = await TextEditor.enrichHTML(getProperty(this.actor.system, "biography.campagne.enemies"), {async: true})    
            sheetData.enrichedSchemes = await TextEditor.enrichHTML(getProperty(this.actor.system, "Magic.schèmes"), {async: true})
            sheetData.enrichedAlchemy = await TextEditor.enrichHTML(getProperty(this.actor.system, "Magic.alchimie"), {async: true})
            sheetData.enrichedEnchants = await TextEditor.enrichHTML(getProperty(this.actor.system, "Magic.enchantement"), {async: true})

        console.log(sheetData);
        return sheetData;

        }

        activateListeners(html) {
            if (this.isEditable) {
                html.find(".add-acquis").click(this._onAcquisCreate.bind(this));            
                html.find(".item-create").click(this._onItemCreate.bind(this));
                html.find(".pouvoir-chat").click(this._onPouvoirChat.bind(this))
                html.find(".pouvoir-use").click(this._onPouvoirUse.bind(this))
                html.find(".item-edit").click(this._onItemEdit.bind(this));
                html.find(".item-delete").click(this._onItemDelete.bind(this));
                html.find(".regen-hp").click(this._onRegen.bind(this));   
                html.find(".select-input").focus(this._onInputSelect);
                const title = $(".sheet-navigation .active").attr("title");
                    title && html.find(".navigation-title").text(title)                  
                            html.find(".sheet-navigation").on("mouseover", ".item,.manage-tabs", (event => {
                                const title = event.target.title;  
                                title && $(event.target).parents(".sheet-navigation").find(".navigation-title").text(title)
                            })), html.find(".sheet-navigation").on("mouseout", ".item,.manage-tabs", (event => {
                                const parent = $(event.target).parents(".sheet-navigation"),
                                    title = parent.find(".item.active").attr("title");
                                title && parent.find(".navigation-title").text(title)
                            })); html.find(".open-compendium").on("click", (event => {
                                if (event.currentTarget.dataset.compendium) {
                                    const compendium = game.packs.get(event.currentTarget.dataset.compendium);
                                    console.log(compendium)
                                    compendium && compendium.render(!0)
                                }
                            }))
    
            super.activateListeners(html);
            }
            if (this.actor.isOwner) {
                html.find(".roll-initiative").click(this._onInitiative.bind(this));
                html.find(".roll-icon").click(this._onTest.bind(this));
                html.find(".spéTest").click(this._onSpéTest.bind(this));
                html.find(".spéTestNécr").click(this._onSpéTestNécr.bind(this));
    
            }
        }
        _onInputSelect(event){
            event.currentTarget.select();
        }
        _onRegen(event) {
            let actor = this.actor 
            let hp = actor.system.attributes
            hp.hpEsprit.max = (Math.max(actor.system.skills.Technique.rank, actor.system.skills.Savoir.rank, actor.system.skills.Social.rank)) + (Math.min(actor.system.skills.Technique.rank, actor.system.skills.Savoir.rank, actor.system.skills.Social.rank))
            hp.hpAme.max = (Math.max(actor.system.skills.Arts.rank, actor.system.skills.Shaan.rank, actor.system.skills.Magie.rank)) + (Math.min(actor.system.skills.Arts.rank, actor.system.skills.Shaan.rank, actor.system.skills.Magie.rank))
            hp.hpCorps.max = (Math.max(actor.system.skills.Rituels.rank, actor.system.skills.Survie.rank, actor.system.skills.Combat.rank)) + (Math.min(actor.system.skills.Rituels.rank, actor.system.skills.Survie.rank, actor.system.skills.Combat.rank))
    
            Dice.RegenHP({
                actor,
                hp
            })
        }
        _onSpéTest(event) {
            let actor = this.actor
            let domain = $(event.target.closest(".pc")).children(".specialisations-title").find(".specialisations-label").text()
            let spécialisation = $(event.target).text().toLowerCase().replaceAll(' ', '').replace("'", '').replaceAll("é", "e").replace("è", "e").replace("ê", "e").replace("à", "a").replace("â", "a").replace("î", "i");
            let description = game.i18n.translations.SRspéDesc[spécialisation]
    
            Dice.SpéTest({
                actor,
                domain: domain,
                spécialisation: spécialisation,
                description: description,
                askForOptions: event.shiftKey
            });
        }
    
        _onSpéTestNécr(event) {
            let actor = this.actor
            let domain = $(event.target.closest(".pc")).children(".specialisations-title").find(".specialisations-label").text()
            let spécialisation = $(event.target).text().toLowerCase().replaceAll(' ', '').replace("'", '').replaceAll("é", "e").replace("è", "e").replace("ê", "e").replace("à", "a").replace("â", "a").replace("î", "i");
            let description = game.i18n.translations.SRspéDesc[spécialisation]
    
            Dice.SpéTestNécr({
                actor,
                domain: domain,
                spécialisation: spécialisation,
                description: description,
                askForOptions: event.shiftKey
            });
    
        }
    
        _onInitiative(event) {
            const dataset = event.currentTarget.dataset;
            let actor = this.actor
    
            Dice.Initiative({
                actor,
                domain: dataset.domain,
                domainLevel: dataset.domainLevel
            });
        }
        _onTest(event) {
            const dataset = event.target.closest(".roll-data").dataset.itemId;
            let actor = this.actor
    
            if(dataset == "domainTest" || "necroseTest") {
                Dice[dataset]({
                    actor,
                    checkType: dataset
                })
            }
    
        }
        _onAcquisCreate(event) {
            let actor = this.actor
            acquisCreate({
                actor,
            })
            
    
            async function acquisCreate ({
                actor = null,
                type = null
            } = {}) {
                
            const actorData = actor ? actor.system : null;
            let checkOptions = await GetAcquisOptions ({type})
    
            if (checkOptions.cancelled) {
                return;
            }
    
            type = checkOptions.type
    
            let itemData = {
              name: "Nouvel Acquis",
              type: type,
              img:"systems/shaanrenaissance/assets/icons/navbar/icon_acquis.webp"
            };
            return actor.createEmbeddedDocuments("Item", [itemData]);
    
            async function GetAcquisOptions({
                type = null,
                template = "systems/shaanrenaissance/templates/actors/PNJ/partials/createAcquis-dialog.hbs"} = {}) {
                    const actorData = actor.toObject(!1);
                    actorData.itemTypes = {
                        Armement: {}, Armimale: {}, Artefact: {}, Manuscrit: {}, Outil: {}, Protection: {}, Relation: {}, Richesse: {}, Technologie: {}, Transport: {}, Bâtiment: {}
                    }
                    const html = await renderTemplate(template, { actor, type, config: CONFIG.shaanRenaissance });
    
                    return new Promise(resolve => {
                        const data = {
                            title: game.i18n.format("Création d'Acquis"),
                            content: html,
                            actor: actorData,
                            buttons: {
                                normal: {
                                  label: game.i18n.localize("chat.actions.create"),
                                  callback: html => resolve(_processAcquisCreateOptions(html[0].querySelector("form")))
                                },
                                cancel: {
                                  label: game.i18n.localize("chat.actions.cancel"),
                                  callback: html => resolve({ cancelled: true })
                                }
                              },
                              default: "normal",
                              close: () => resolve({ cancelled: true }),
                            };
                            console.log(data)
                            new Dialog(data,null).render(true);
                          });
                }
                function _processAcquisCreateOptions(form) {
                    return {
                     type: form.type?.value
                    }
                  }
            }
        }
    
        _onItemCreate(event) {
            event.preventDefault();
            const espritBtn = event.target.closest("#Esprit-add")
            const ameBtn = event.target.closest("#Ame-add")
            const corpsBtn = event.target.closest("#Corps-add")
            const necroseBtn = event.target.closest("#Nécrose-add")
            const magicTrihnBtn = event.target.closest("#MagicTrihn-add")
            const graftAddBtn = event.target.closest("#graft-add")
    
            if(magicTrihnBtn) {
                let itemData = {
                    name: "Trihn",
                    type: "Trihn",
                    item: {
                        system: {
                            trihnType: null,
                            puissance: null,
                            emplacement: null,
                            pouvoir: {
                                value: null
                            }
                        }
                    }
                }
                return this.actor.createEmbeddedDocuments("Item", [itemData]);
            }
            this.actor.sheet.render();
                
            if (espritBtn) {
                let itemData = {
              name: "Nouveau pouvoir d'Esprit",
              type: "Pouvoir",
              system: {
                trihn: "Esprit"
              }
            };
    
            return this.actor.createEmbeddedDocuments("Item", [itemData]);
            }
            this.actor.sheet.render();
    
            if (ameBtn) {
                let itemData = {
              name: "Nouveau pouvoir d'Âme",
              type: "Pouvoir",
              system: {
                trihn: "Âme"
              }
            };
    
            return this.actor.createEmbeddedDocuments("Item", [itemData]);
            }
            this.actor.sheet.render();
    
            if (corpsBtn) {
                let itemData = {
              name: "Nouveau pouvoir de Corps",
              type: "Pouvoir",
              system: {
                trihn: "Corps"
              }
            };
    
            return this.actor.createEmbeddedDocuments("Item", [itemData]);
            }
            this.actor.sheet.render();
    
            if (necroseBtn) {
                let itemData = {
              name: "Nouveau pouvoir de Nécrose",
              type: "Pouvoir",
              system: {
                trihn: "Nécrose"
              }
            };
    
            return this.actor.createEmbeddedDocuments("Item", [itemData]);
            }
            this.actor.sheet.render();
    
            if (graftAddBtn) {
                let actor = this.actor
                const actorData = actor.toObject(!1)
                const itemsF = actorData.items.filter(function (item) { return item.system.morphe == false && item.type == "Armement" || item.system.morphe == false && item.type == "Outil" || item.system.morphe == false && item.type == "Protection" || item.system.morphe == false && item.type == "Technologie"})
    
                graftCreate({
                    actor: actor,
                    items: itemsF
                })
    
                console.log(actorData)
                
                async function graftCreate ({
                    actor = null,
                    items = null
                } = {}) { 
                    let item
                    let actorId = actor._id
                    let checkOptions = await GetGraftOptions ({item})
        
                    if (checkOptions.cancelled) {
                        return;
                    }
                    
                    item = checkOptions.item
                    const itemF = actor.items.get(item)
                    itemF.update({
                        system: {
                            morphe: true
                        }
                    })
                    actor.sheet.render()
                    
                
                async function GetGraftOptions({
                    item = null,
                    template = "systems/shaanrenaissance/templates/actors/Personnage/partials/createGraft-dialog.hbs"} = {}) {
                        const actorData = actor
                        actorData.itemsNotGraft = actorData.items.filter(function (item) { return item.system.morphe == false && item.type == "Armement" || item.system.morphe == false && item.type == "Outil" || item.system.morphe == false && item.type == "Protection" || item.system.morphe == false && item.type == "Technologie"})
                        const html = await renderTemplate(template, { actor, item });
        
                        return new Promise(resolve => {
                            const data = {
                                title: game.i18n.format("Greffe de module"),
                                content: html,
                                actor: actorData,
                                buttons: {
                                    normal: {
                                      label: game.i18n.localize("chat.actions.graft"),
                                      callback: html => resolve(_processGraftCreateOptions(html[0].querySelector("form")))
                                    },
                                    cancel: {
                                      label: game.i18n.localize("chat.actions.cancel"),
                                      callback: html => resolve({ cancelled: true })
                                    }
                                  },
                                  default: "normal",
                                  close: () => resolve({ cancelled: true }),
                            };
                            new Dialog(data, null).render(true);
                        });
                }
                function _processGraftCreateOptions(form) {
                    return {
                        item: form.item?.value
                    }
                }
                
            }
            
            }
    
        }
            _onPouvoirChat(event) {
            event.preventDefault();
            let element = event.target
            let itemId = element.closest(".item").dataset.itemId;
            let actor = this.actor
            let item = actor.items.get(itemId)
    
            PouvoirChat({
                actor: actor,
                pouvoir: item
            })
    
            async function PouvoirChat({
                actor = null,
                pouvoir = null,
                extraMessageData = {},
                sendMessage = true
            } = {}) {
                const messageTemplate = "systems/shaanrenaissance/templates/chat/pouvoir-chat.hbs";
    
                if(sendMessage) {
                    ToCustomMessage(actor, pouvoir, messageTemplate, {
                        ...extraMessageData,
                        actorID: actor.uuid
                    })
                }
    
                async function ToCustomMessage(actor = null, pouvoir, template, extraData) {
                    let templateContext = {
                        ...extraData,
                        pouvoirData: pouvoir
                    };
                    console.log(templateContext)
                    console.log(pouvoir)
    
                    let chatData = {
                        user: game.user.id,
                        speaker: ChatMessage.getSpeaker({actor}),
                        content: await renderTemplate(template, templateContext),
                        sound: CONFIG.sounds.notification,
                        type: CONST.CHAT_MESSAGE_TYPES.OTHER
                    }
                    console.log(chatData)
    
                    ChatMessage.create(chatData)
                }
            }
        }
        _onPouvoirUse(event) {
            let itemId = event.target.closest(".item").dataset.itemId
            let item = this.actor.items.get(itemId)
    
            if(item.system.isUsed == false){
                item.update({
                    system: {
                        isUsed: true
                    }
                })
            }
            else if(item.system.isUsed == true) {
                item.update({
                    system: {
                        isUsed: false
                    }
                })
            }
        }
        _onItemEdit(event) {
            event.preventDefault();
            let element = event.target
            let itemId = element.closest(".item").dataset.itemId;
            let item = this.actor.items.get(itemId);
    
            item.sheet.render(true);
        }
        _onItemDelete(event) {
            event.preventDefault();
            let element = event.target
            let itemId = element.closest(".item").dataset.itemId;
            return this.actor.deleteEmbeddedDocuments("Item", [itemId])
        }
        
        
    
}
