(ns app.core
  (:require
   [xstream :as xs]
   [cycle.run :as run]
   [cycle.dom :as dom]))

(def drivers
  (js-obj
   "DOM" (dom/makeDOMDriver "#app")))

(defn -main
  [source]
  (let [$dom (.-DOM source)

        reset$ (-> (.select $dom "#reset-btn")
                   (.events "click")
                   (.mapTo :reset))

        counter$ (-> (.periodic xs/Stream 1000)
                     (.mapTo 1))

        state$ (-> (.merge xs/Stream counter$ reset$)
                   (.fold (fn [count event] (if (= event :reset) 0 (+ count event))) 0))

        view (fn [count]
               (dom/div
                #js {}
                #js [(dom/h3
                      #js {}
                      #js [(.toString count)])
                     (dom/button "#reset-btn"
                                 #js {}
                                 #js ["RESET"])]))]

    (js-obj "DOM" (.map state$ view))))

(run/run -main drivers)

