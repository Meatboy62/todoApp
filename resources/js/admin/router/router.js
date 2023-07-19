import Vue from 'vue';
import VueRouter from 'vue-router';
import ListTask from '../pages/task/ListTask.vue';
import CreateTask from '../pages/task/CreateTask.vue';
import ListCompleted from '../pages/task/ListCompleteTask.vue';
import ListPending from '../pages/task/ListPendingTask.vue';
import CompletedTask from '../pages/task/CompletedTask.vue';
import DeleteTask from '../pages/task/DeleteTask.vue';
import LogOut from '../auth/LogOut.vue';
import Login from '../auth/Login.vue';
import Register from '../auth/Register.vue';
import LayoutMain from '../commons/LayOut.vue';

Vue.use(VueRouter);

const routes  = new VueRouter({
    mode: "history",
    routes:[
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("authFlag")) {
                next({ name: "list-task" });
            } else {
                next();
            }
        },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("authFlag")) {
                next({ name: "list-task" });
            } else {
                next();
            }
        },
    },

    {
        path: '/create-task',
        name: 'create-task',
        component: CreateTask,
        meta: {
            requiresAuth: false,
            title: "Create task",
        },
    },
    {
        path: '/list-task',
        name: 'list-task',
        component: ListTask,
        meta: {
            requiresAuth: false,
            title: "List task",
        },
    },
    {
        path: '/list-completed-task',
        name: 'list-completed-task',
        component: ListCompleted,
        meta: {
            requiresAuth: false,
            title: "List Completed task",
        },
    },
    {
        path: '/list-pending-task',
        name: 'list-pending-task',
        component: ListPending,
        meta: {
            requiresAuth: false,
            title: "List Pending Tasks",
        },
    },
    {
        path: '/complete-task',
        name: 'complete-task',
        component: CompletedTask,
        meta: {
            requiresAuth: false,
            title: "Complete Tasks",
        },
    },
    {
        path: '/delate-task',
        name: 'delete-task',
        component: DeleteTask,
        meta: {
            requiresAuth: false,
            title: "Delete task",
        },
    },
    {
        path: '/log-out',
        name: 'log-out',
        component: LogOut,
        meta: {
            requiresAuth: false,
            title: "Log out",
        },
    },

    {
        path: "*",
        redirect: { name: "create-task" },
    },
],

});
routes.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("authFlag")) {
            next();
        } else {
            next({ name: "login" });
        }
    } else {
        next();
    }
});

export default routes;