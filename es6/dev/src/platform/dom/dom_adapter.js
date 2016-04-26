import { isBlank } from 'angular2/src/facade/lang';
export var DOM = null;
export function setRootDomAdapter(adapter) {
    if (isBlank(DOM)) {
        DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 */
export class DomAdapter {
    /**
     * Maps attribute names to their corresponding property names for cases
     * where attribute name doesn't match property name.
     */
    get attrToPropMap() { return this._attrToPropMap; }
    ;
    set attrToPropMap(value) { this._attrToPropMap = value; }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWtxVm1xc29lLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsT0FBTyxFQUFPLE1BQU0sMEJBQTBCO0FBRXRELE9BQU8sSUFBSSxHQUFHLEdBQWUsSUFBSSxDQUFDO0FBRWxDLGtDQUFrQyxPQUFtQjtJQUNuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsR0FBRyxPQUFPLENBQUM7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFRCx5Q0FBeUM7QUFDekM7O0dBRUc7QUFDSDtJQWNFOzs7T0FHRztJQUNILElBQUksYUFBYSxLQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0lBQzVFLElBQUksYUFBYSxDQUFDLEtBQThCLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQTZHcEYsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JsYW5rLCBUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgdmFyIERPTTogRG9tQWRhcHRlciA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb290RG9tQWRhcHRlcihhZGFwdGVyOiBEb21BZGFwdGVyKSB7XG4gIGlmIChpc0JsYW5rKERPTSkpIHtcbiAgICBET00gPSBhZGFwdGVyO1xuICB9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlOnJlcXVpcmVQYXJhbWV0ZXJUeXBlICovXG4vKipcbiAqIFByb3ZpZGVzIERPTSBvcGVyYXRpb25zIGluIGFuIGVudmlyb25tZW50LWFnbm9zdGljIHdheS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbUFkYXB0ZXIge1xuICBhYnN0cmFjdCBoYXNQcm9wZXJ0eShlbGVtZW50LCBuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTtcbiAgYWJzdHJhY3QgZ2V0UHJvcGVydHkoZWw6IEVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgaW52b2tlKGVsOiBFbGVtZW50LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogYW55O1xuXG4gIGFic3RyYWN0IGxvZ0Vycm9yKGVycm9yKTtcbiAgYWJzdHJhY3QgbG9nKGVycm9yKTtcbiAgYWJzdHJhY3QgbG9nR3JvdXAoZXJyb3IpO1xuICBhYnN0cmFjdCBsb2dHcm91cEVuZCgpO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBhYnN0cmFjdCBnZXRYSFIoKTogVHlwZTtcblxuICAvKipcbiAgICogTWFwcyBhdHRyaWJ1dGUgbmFtZXMgdG8gdGhlaXIgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSBuYW1lcyBmb3IgY2FzZXNcbiAgICogd2hlcmUgYXR0cmlidXRlIG5hbWUgZG9lc24ndCBtYXRjaCBwcm9wZXJ0eSBuYW1lLlxuICAgKi9cbiAgZ2V0IGF0dHJUb1Byb3BNYXAoKToge1trZXk6IHN0cmluZ106IHN0cmluZ30geyByZXR1cm4gdGhpcy5fYXR0clRvUHJvcE1hcDsgfTtcbiAgc2V0IGF0dHJUb1Byb3BNYXAodmFsdWU6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7IHRoaXMuX2F0dHJUb1Byb3BNYXAgPSB2YWx1ZTsgfTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYXR0clRvUHJvcE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG5cbiAgYWJzdHJhY3QgcGFyc2UodGVtcGxhdGVIdG1sOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBxdWVyeShzZWxlY3Rvcjogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBxdWVyeVNlbGVjdG9yKGVsLCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQ7XG4gIGFic3RyYWN0IHF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbGVjdG9yOiBzdHJpbmcpOiBhbnlbXTtcbiAgYWJzdHJhY3Qgb24oZWwsIGV2dCwgbGlzdGVuZXIpO1xuICBhYnN0cmFjdCBvbkFuZENhbmNlbChlbCwgZXZ0LCBsaXN0ZW5lcik6IEZ1bmN0aW9uO1xuICBhYnN0cmFjdCBkaXNwYXRjaEV2ZW50KGVsLCBldnQpO1xuICBhYnN0cmFjdCBjcmVhdGVNb3VzZUV2ZW50KGV2ZW50VHlwZSk6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHByZXZlbnREZWZhdWx0KGV2dCk7XG4gIGFic3RyYWN0IGlzUHJldmVudGVkKGV2dCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldElubmVySFRNTChlbCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0T3V0ZXJIVE1MKGVsKTogc3RyaW5nO1xuICBhYnN0cmFjdCBub2RlTmFtZShub2RlKTogc3RyaW5nO1xuICBhYnN0cmFjdCBub2RlVmFsdWUobm9kZSk6IHN0cmluZztcbiAgYWJzdHJhY3QgdHlwZShub2RlKTogc3RyaW5nO1xuICBhYnN0cmFjdCBjb250ZW50KG5vZGUpOiBhbnk7XG4gIGFic3RyYWN0IGZpcnN0Q2hpbGQoZWwpOiBOb2RlO1xuICBhYnN0cmFjdCBuZXh0U2libGluZyhlbCk6IE5vZGU7XG4gIGFic3RyYWN0IHBhcmVudEVsZW1lbnQoZWwpOiBOb2RlO1xuICBhYnN0cmFjdCBjaGlsZE5vZGVzKGVsKTogTm9kZVtdO1xuICBhYnN0cmFjdCBjaGlsZE5vZGVzQXNMaXN0KGVsKTogTm9kZVtdO1xuICBhYnN0cmFjdCBjbGVhck5vZGVzKGVsKTtcbiAgYWJzdHJhY3QgYXBwZW5kQ2hpbGQoZWwsIG5vZGUpO1xuICBhYnN0cmFjdCByZW1vdmVDaGlsZChlbCwgbm9kZSk7XG4gIGFic3RyYWN0IHJlcGxhY2VDaGlsZChlbCwgbmV3Tm9kZSwgb2xkTm9kZSk7XG4gIGFic3RyYWN0IHJlbW92ZShlbCk6IE5vZGU7XG4gIGFic3RyYWN0IGluc2VydEJlZm9yZShlbCwgbm9kZSk7XG4gIGFic3RyYWN0IGluc2VydEFsbEJlZm9yZShlbCwgbm9kZXMpO1xuICBhYnN0cmFjdCBpbnNlcnRBZnRlcihlbCwgbm9kZSk7XG4gIGFic3RyYWN0IHNldElubmVySFRNTChlbCwgdmFsdWUpO1xuICBhYnN0cmFjdCBnZXRUZXh0KGVsKTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRUZXh0KGVsLCB2YWx1ZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZ2V0VmFsdWUoZWwpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldFZhbHVlKGVsLCB2YWx1ZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZ2V0Q2hlY2tlZChlbCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHNldENoZWNrZWQoZWwsIHZhbHVlOiBib29sZWFuKTtcbiAgYWJzdHJhY3QgY3JlYXRlQ29tbWVudCh0ZXh0OiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IGNyZWF0ZVRlbXBsYXRlKGh0bWwpOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBkb2M/KTogSFRNTEVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnROUyhuczogc3RyaW5nLCB0YWdOYW1lOiBzdHJpbmcsIGRvYz8pOiBFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVUZXh0Tm9kZSh0ZXh0OiBzdHJpbmcsIGRvYz8pOiBUZXh0O1xuICBhYnN0cmFjdCBjcmVhdGVTY3JpcHRUYWcoYXR0ck5hbWU6IHN0cmluZywgYXR0clZhbHVlOiBzdHJpbmcsIGRvYz8pOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlU3R5bGVFbGVtZW50KGNzczogc3RyaW5nLCBkb2M/KTogSFRNTFN0eWxlRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlU2hhZG93Um9vdChlbCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0U2hhZG93Um9vdChlbCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0SG9zdChlbCk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0RGlzdHJpYnV0ZWROb2RlcyhlbCk6IE5vZGVbXTtcbiAgYWJzdHJhY3QgY2xvbmUgLyo8VCBleHRlbmRzIE5vZGU+Ki8gKG5vZGU6IE5vZGUgLypUKi8pOiBOb2RlIC8qVCovO1xuICBhYnN0cmFjdCBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W107XG4gIGFic3RyYWN0IGdldEVsZW1lbnRzQnlUYWdOYW1lKGVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W107XG4gIGFic3RyYWN0IGNsYXNzTGlzdChlbGVtZW50KTogYW55W107XG4gIGFic3RyYWN0IGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCByZW1vdmVTdHlsZShlbGVtZW50LCBzdHlsZU5hbWU6IHN0cmluZyk7XG4gIGFic3RyYWN0IGdldFN0eWxlKGVsZW1lbnQsIHN0eWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBoYXNTdHlsZShlbGVtZW50LCBzdHlsZU5hbWU6IHN0cmluZywgc3R5bGVWYWx1ZT86IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHRhZ05hbWUoZWxlbWVudCk6IHN0cmluZztcbiAgYWJzdHJhY3QgYXR0cmlidXRlTWFwKGVsZW1lbnQpOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICBhYnN0cmFjdCBoYXNBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBoYXNBdHRyaWJ1dGVOUyhlbGVtZW50LCBuczogc3RyaW5nLCBhdHRyaWJ1dGU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldEF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0QXR0cmlidXRlTlMoZWxlbWVudCwgbnM6IHN0cmluZywgYXR0cmlidXRlOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBzZXRBdHRyaWJ1dGVOUyhlbGVtZW50LCBuczogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCByZW1vdmVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cmlidXRlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCByZW1vdmVBdHRyaWJ1dGVOUyhlbGVtZW50LCBuczogc3RyaW5nLCBhdHRyaWJ1dGU6IHN0cmluZyk7XG4gIGFic3RyYWN0IHRlbXBsYXRlQXdhcmVSb290KGVsKTtcbiAgYWJzdHJhY3QgY3JlYXRlSHRtbERvY3VtZW50KCk6IEhUTUxEb2N1bWVudDtcbiAgYWJzdHJhY3QgZGVmYXVsdERvYygpOiBIVE1MRG9jdW1lbnQ7XG4gIGFic3RyYWN0IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbCk7XG4gIGFic3RyYWN0IGdldFRpdGxlKCk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0VGl0bGUobmV3VGl0bGU6IHN0cmluZyk7XG4gIGFic3RyYWN0IGVsZW1lbnRNYXRjaGVzKG4sIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1RlbXBsYXRlRWxlbWVudChlbDogYW55KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNUZXh0Tm9kZShub2RlKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNDb21tZW50Tm9kZShub2RlKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNFbGVtZW50Tm9kZShub2RlKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaGFzU2hhZG93Um9vdChub2RlKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgaXNTaGFkb3dSb290KG5vZGUpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpbXBvcnRJbnRvRG9jIC8qPFQgZXh0ZW5kcyBOb2RlPiovIChub2RlOiBOb2RlIC8qVCovKTogTm9kZSAvKlQqLztcbiAgYWJzdHJhY3QgYWRvcHROb2RlIC8qPFQgZXh0ZW5kcyBOb2RlPiovIChub2RlOiBOb2RlIC8qVCovKTogTm9kZSAvKlQqLztcbiAgYWJzdHJhY3QgZ2V0SHJlZihlbGVtZW50KTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRFdmVudEtleShldmVudCk6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVzb2x2ZUFuZFNldEhyZWYoZWxlbWVudCwgYmFzZVVybDogc3RyaW5nLCBocmVmOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBzdXBwb3J0c0RPTUV2ZW50cygpOiBib29sZWFuO1xuICBhYnN0cmFjdCBzdXBwb3J0c05hdGl2ZVNoYWRvd0RPTSgpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXRHbG9iYWxFdmVudFRhcmdldCh0YXJnZXQ6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgZ2V0SGlzdG9yeSgpOiBIaXN0b3J5O1xuICBhYnN0cmFjdCBnZXRMb2NhdGlvbigpOiBMb2NhdGlvbjtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xuICBhYnN0cmFjdCByZXNldEJhc2VFbGVtZW50KCk6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFVzZXJBZ2VudCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldERhdGEoZWxlbWVudCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTogYW55O1xuICBhYnN0cmFjdCBnZXREYXRhKGVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0R2xvYmFsVmFyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk7XG4gIGFic3RyYWN0IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk6IG51bWJlcjtcbiAgYWJzdHJhY3QgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICBhYnN0cmFjdCBwZXJmb3JtYW5jZU5vdygpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldEFuaW1hdGlvblByZWZpeCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldFRyYW5zaXRpb25FbmQoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBzdXBwb3J0c0FuaW1hdGlvbigpOiBib29sZWFuO1xufVxuIl19