/// <reference path="../Definitions/jsfl/jsfl.d.ts"/>

class DOM {
      dom: any;
      lib: any;
      tl: any;

      constructor() {
            this.dom = fl.getDocumentDOM();
            this.lib = this.dom.library;
            this.tl = this.dom.getTimeline();
      }

      public getDocument() {
            return this.dom;
      }

      public getLibrary() {
            return this.lib;
      }

      public getLayers(timeline: any) {
            if (timeline == null || timeline == undefined) {
                  throw new Error('Cannot find timeline.');
            }
            return timeline.layers;
      }

      public getLayerElements(layer: any) {
            return this.getFrameLibElements(layer.frames);
      }

      public getSelectedFrameElements() {
            return this.getFrameLibElements(this.tl.getSelectedFrames());
      }

      public getFrameLibElements(frames: any) {
            var output = [];
            frames.forEch((frame) => {
                  var element = frame.element.libraryItem;
                  if (element.itemType == "movie clip" || element.itemType == 'graphic') {
                        output.push(element);
                  }
            });

            return output;
      }

      public getAllUsedElements() {

      }
}

export = DOM;
