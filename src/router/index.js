import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ReadyForEvalute from '@/components/ReadyForEvalute'
import TestForObj from '@/components/TestForObj'
import TestForJudge from '@/components/TestForJudge'
import TestForChoice from '@/components/TestForChoice'
import ResultForObj from '@/components/ResultForObj'
import TestForSub from '@/components/TestForSub'
import ScoreForSub from '@/components/ScoreForSub'
import ScreenForSub from '@/components/ScreenForSub'
import ResultForChoice from "@/components/ResultForChoice"
import TestScroll from "@/components/TestScroll"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ReadyForEvalute",
      component: ReadyForEvalute
      // component: TestScroll
    },
    {
      path: "/testforobj",
      name: "TestForObj",
      component: TestForObj
    },
    {
      path: "/testforjudge",
      name: "TestForJudge",
      component: TestForJudge
    },
    {
      path: "/testforchoice",
      name: "TestForChoice",
      component: TestForChoice
    },
    {
      path: "/resultforobj",
      name: "ResultForObj",
      component: ResultForObj
    },
    {
      path: "/resultforchoice",
      name: "ResultForChoice",
      component: ResultForChoice
    },
    {
      path: "/testforsub",
      name: "TestForSub",
      component: TestForSub
    },
    {
      path: "/scoreforsub",
      name: "ScoreForSub",
      component: ScoreForSub
    },
    {
      path: "/screenforsub",
      name: "ScreenForSub",
      component: ScreenForSub
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
