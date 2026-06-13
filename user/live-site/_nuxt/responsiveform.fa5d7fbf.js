/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function e(s){class i extends s{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...n){super(...n),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}return i}export{e as C};
