import React from 'react';
import Translate from 'i18n';

export default [
  {
    title: Translate.t1('dashboard'),
    url: '/academy',
    icon: {
      position: 'left',
      type: 'dashboard',
    },
  },
  {
    title: Translate.t1("find a course"),
    url: '/academy/find-course',
    icon: {
      position: 'left',
      type: 'container',
    },
  },
  {
    title: Translate.t2('my studying'),
    url: '/academy/my-studying',
    icon: {
      position: 'left',
      type: 'form',
    },
  },
  {
    title: Translate.t2('my course'),
    url: '/academy/course-management',
    icon: {
      position: 'left',
      type: 'project',
    },
  },

  {
    title: Translate.t1("profiles"),
    url: 'profiles',
    icon: {
      position: 'left',
      type: 'profile',
    },
    subMenu: [
      {
        title: Translate.t1("information"),
        url: '/academy/user/information',
        icon: {
          position: 'left',
          type: 'user',
        },
      },
      {
        title: Translate.t1("password"),
        url: '/academy/user/change-password',
        icon: {
          position: 'left',
          type: 'key',
        },
      },
    ]
  },
];
//
// {
//   title: Translate.t2('academy'),
//     url: 'academy-categories',
//   icon: {
//   position: 'left',
//     type: 'radar-chart',
// },
//   subMenu: [
//     {
//       title: Translate.t1("syllabus"),
//       url: '/academy/credit-syllabus',
//       icon: {
//         position: 'left',
//         type: 'read',
//       },
//     },
//     {
//       title: Translate.t1("my course"),
//       url: '/academy/my-course/list',
//       icon: {
//         position: 'left',
//         type: 'project',
//       },
//     },
//     {
//       title: Translate.t1('teaching plan'),
//       url: '/academy/teaching-plan',
//       icon: {
//         position: 'left',
//         type: 'project',
//       },
//     },
//     {
//       title: Translate.t1("report"),
//       url: '/academy/report',
//       icon: {
//         position: 'left',
//         type: 'bar-chart',
//       },
//     },
//   ]
// },
