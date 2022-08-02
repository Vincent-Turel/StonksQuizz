import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditQuizComponent } from './creation-modif-quiz/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { QuestionPlayComponent } from './quizzes/quiz-play/question-play.component';
import { MainMenuComponent } from './settings/main-menu/main-menu.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { MotorSettingsComponent } from './settings/motor-settings/motor-settings.component';
import { VisualSettingsComponent } from './settings/visual-settings/visual-settings.component';
import { HomeScreenComponent } from './navigation/home-screen/home-screen.component';
import { ChooseHandicapComponent } from './account/choose-handicap/choose-handicap.component';
import { RegisterVisualSettingsComponent } from './account/register-visual-settings/register-visual-settings.component';
import { RegisterMotorSettingsComponent } from './account/register-motor-settings/register-motor-settings.component';
import { HomeBaseComponent } from './navigation/home-base/home-base.component';
import { ChooseThemeComponent } from './navigation/choose-theme/choose-theme.component';
import { ChooseQuizComponent } from './navigation/choose-quiz/choose-quiz.component';
import { UsersResolver } from '../resolvers/users.resolver';
import { EditQuizMenuComponent } from './creation-modif-quiz/edit-quiz-menu/edit-quiz-menu.component';
import { NewQuizThemeComponent } from './creation-modif-quiz/new-quiz-theme/new-quiz-theme.component';
import { NewQuestionComponent } from './creation-modif-quiz/new-question/new-question.component';
import { NewOpenQuestionComponent } from './creation-modif-quiz/new-open-question/new-open-question.component';
import { ConfigNewQuizComponent } from './creation-modif-quiz/config-new-quiz/config-new-quiz.component';
import { NewCloseQuestionComponent } from './creation-modif-quiz/new-close-question/new-close-question.component';
import { NewQuestionRecapComponent } from './creation-modif-quiz/new-question-recap/new-question-recap.component';
import { NewQuizRecapComponent } from './creation-modif-quiz/new-quiz-recap/new-quiz-recap.component';
import { quizUploadComponent } from './creation-modif-quiz/quiz-upload/quiz-upload.component';
import { AnswerDetailComponent } from './creation-modif-quiz/answer-detail/answer-detail.component';
import { SelectImageComponent } from './creation-modif-quiz/select-image/select-image.component';
import { EditQuizMainComponent } from './creation-modif-quiz/edit-quiz-main/edit-quiz-main.component';
import { ModifQuestionComponent } from './creation-modif-quiz/modif-question/modif-question.component';
import { DeleteQuizComponent } from './creation-modif-quiz/delete-quiz/delete-quiz.component';
import { ModifCloseQuestionComponent } from './creation-modif-quiz/modif-close-question/modif-close-question.component';
import { ModifDescriptionComponent } from './creation-modif-quiz/modif-description/modif-description.component';
import { ModifOpenQuestionComponent } from './creation-modif-quiz/modif-open-question/modif-open-question.component';
import { ModifAnswerComponent } from './creation-modif-quiz/modif-answer/modif-answer.component';

// @ts-ignore
const routes: Routes = [
    { path: 'not-connected/home', component: HomeBaseComponent },
    { path: 'edit-user/:id', redirectTo: 'not-connected/log-in' },
    { path: 'not-connected/register', component: UserFormComponent },
    {
        path: 'not-connected/log-in',
        component: UserListComponent,
        resolve: { users: UsersResolver },
    },
    { path: 'connected/choose-theme', component: ChooseThemeComponent },
    { path: 'connected/choose-quiz', component: ChooseQuizComponent },
    { path: 'edit-user/:id', redirectTo: 'log-in' },
    { path: 'not-connected/register', component: UserFormComponent },
    {
        path: 'connected/edit-quiz-menu/edit-quiz',
        component: EditQuizComponent,
    },
    { path: 'connected/edit-quiz/:id', component: EditQuizComponent },
    {
        path: 'connected/quiz-play/:id1/question/:id2',
        component: QuestionPlayComponent,
    },
    { path: 'connected/home-screen', component: HomeScreenComponent },
    { path: 'connected/settings', component: MainMenuComponent },
    { path: 'connected/settings/visual', component: VisualSettingsComponent },
    { path: 'connected/settings/motor', component: MotorSettingsComponent },
    { path: 'connected/settings/account', component: AccountSettingsComponent },
    { path: 'connected/edit-quiz-menu', component: EditQuizMenuComponent },
    {
        path: 'connected/edit-quiz-menu/new-quiz-theme',
        component: NewQuizThemeComponent,
    },
    {
        path: 'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz',
        component: ConfigNewQuizComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question',
        component: NewQuestionComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/new-open-question',
        component: NewOpenQuestionComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/new-close-question',
        component: NewCloseQuestionComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-question-recap',
        component: NewQuestionRecapComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap',
        component: NewQuizRecapComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/upload-quiz',
        component: quizUploadComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/new-open-question',
        component: NewOpenQuestionComponent,
    },
    {
        path: 'not-connected/choose-handicap',
        component: ChooseHandicapComponent,
    },
    {
        path: 'not-connected/register-visual-settings/:motor',
        component: RegisterVisualSettingsComponent,
    },
    {
        path: 'not-connected/register-motor-settings',
        component: RegisterMotorSettingsComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/answer-detail',
        component: AnswerDetailComponent,
    },
    {
        path: 'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/picture',
        component: SelectImageComponent,
    },
    {
        path: 'connected/edit-quiz-menu/modif-quiz',
        component: EditQuizMainComponent,
    },
    {
        path: 'connected/edit-quiz-menu/modif-quiz/modif-question',
        component: ModifQuestionComponent,
    },
    {
        path: 'connected/edit-quiz-menu/modif-quiz/delete-quiz',
        component: DeleteQuizComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/modif-quiz/modif-question/close-question',
        component: ModifCloseQuestionComponent,
    },
    {
        path: 'connected/edit-quiz-menu/modif-quiz/modif-question/description',
        component: ModifDescriptionComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/modif-quiz/modif-question/open-question',
        component: ModifOpenQuestionComponent,
    },
    {
        path:
            'connected/edit-quiz-menu/modif-quiz/modif-question/open-question/answer',
        component: ModifAnswerComponent,
    },
    { path: '**', redirectTo: 'not-connected/home' },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
