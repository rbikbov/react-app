declare global {
  // https://github.com/noveogroup-amorgunov/nukeapp/blob/main/types/app.d.ts
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from "app" layer
   * and use it in "shared" layer
   */

  declare type RootState = import('../store/index').RootState
  declare type AppDispatch = import('../store/index').AppDispatch
}

export {}
