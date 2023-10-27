import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      curAnimation: null,
      animationSet: {},
      showModal: false,
      isAbleToOpen: false,
      showSettings: false,
      modalTarget: "",

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
    };
  })
);
