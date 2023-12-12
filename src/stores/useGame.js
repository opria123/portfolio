import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      curAnimation: null,
      animationSet: {},
      showModal: false,
      isAbleToOpen: false,
      isMenuAbleToOpen: true,
      showSettings: false,
      modalTarget: "",
      siteData: {
        "experiences": [
          {
            "title": "",
            "company_name": "",
            "icon": "",
            "iconBg": "",
            "date": "",
            "points": [
            ]
          },
          {
            "title": "",
            "company_name": "",
            "icon": "",
            "iconBg": "",
            "date": "",
            "points": [
            ]
          },
          {
            "title": "",
            "company_name": "",
            "icon": "",
            "iconBg": "",
            "date": "",
            "points": [
            ]
          },
          {
            "title": "",
            "company_name": "",
            "icon": "",
            "iconBg": "",
            "date": "",
            "points": [
            ]
          }
        ],
        "about": {
          "introduction": "",
          "cards": [
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            },
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            },
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            }
          ]
        },
        "projects": {
          "introduction": "",
          "cards": [
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            },
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            },
            {
              "image": "",
              "title": "",
              "alt": "",
              "body": ""
            }
          ]
        },
        "hero": {
          "header": "",
          "body": ""
        }
      },
      resume: null,

      initializeAnimationSet: (animationSet) => {
        set((state) => {
          if (Object.keys(state.animationSet).length === 0) {
            return { animationSet };
          }
          return {};
        });
      },

      reset: () => {
        set((state) => {
          return { curAnimation: state.animationSet.idle };
        });
      },

      idle: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand };
          } else if (state.curAnimation !== state.animationSet.wave) {
            return { curAnimation: state.animationSet.idle };
          }
          return {};
        });
      },

      walk: () => {
        set((state) => {
          return { curAnimation: state.animationSet.walk };
        });
      },

      run: () => {
        set((state) => {
          return { curAnimation: state.animationSet.run };
        });
      },

      jump: () => {
        set((state) => {
          return { curAnimation: state.animationSet.jump };
        });
      },

      jumpIdle: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jump) {
            return { curAnimation: state.animationSet.jumpIdle };
          }
          return {};
        });
      },

      jumpLand: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.jumpIdle) {
            return { curAnimation: state.animationSet.jumpLand };
          }
          return {};
        });
      },

      duck: () => {
        set((state) => {
          return { curAnimation: state.animationSet.duck };
        });
      },

      wave: () => {
        set((state) => {
          if (state.curAnimation === state.animationSet.idle) {
            return { curAnimation: state.animationSet.wave };
          }
          return {};
        });
      },

      setShowModal: (showModal) => {
        set((state) => {
          state.showModal = showModal
          return { showModal: state.showModal };
        })
      },

      setIsAbleToOpen: (isAbleToOpen) => {
        set((state) => {
          state.isAbleToOpen = isAbleToOpen
          return { isAbleToOpen: state.isAbleToOpen };
        });
      },
      setMenuIsAbleToOpen: (isAbleToOpen) => {
        set((state) => {
          state.isAbleToOpen = isAbleToOpen
          return { isAbleToOpen: state.isAbleToOpen };
        });
      },

      setShowSettings: (showSettings) => {
        set((state) => {
          state.showSettings = showSettings
          return { showSettings: state.showSettings };
        });
      },

      setModalTarget: (modalTarget) => {
        set((state) => {
          state.modalTarget = modalTarget
          return { modalTarget: state.modalTarget };
        });
      },

      setSiteData: (siteData) => {
        set((state) => {
          state.siteData = siteData
          return { siteData: state.siteData };
        });
      },

      setResume: (resume) => {
        set((state) => {
          state.resume = resume
          return { resume: state.resume };
        });
      },
    };
  })
);
