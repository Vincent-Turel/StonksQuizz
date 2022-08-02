import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './side-bars/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EditQuizComponent } from './creation-modif-quiz/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionComponent } from './quizzes/questions/question/question.component';
import { QuestionFormComponent } from './quizzes/questions/question-form/question-form.component';
import { QuestionListComponent } from './quizzes/questions/question-list/question-list.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NavigationBarComponent } from './side-bars/navigation-bar/navigation-bar.component';
import { QuestionPlayComponent } from './quizzes/quiz-play/question-play.component';
import { MainMenuComponent } from './settings/main-menu/main-menu.component';
import { VisualSettingsComponent } from './settings/visual-settings/visual-settings.component';
import { MotorSettingsComponent } from './settings/motor-settings/motor-settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ExitQuizDialogComponent } from './dialogs/exit-quiz-dialog/exit-quiz-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditQuizMenuComponent } from './creation-modif-quiz/edit-quiz-menu/edit-quiz-menu.component';
import { NewQuizThemeComponent } from './creation-modif-quiz/new-quiz-theme/new-quiz-theme.component';
import { SlowClickDirective } from './directives/slow-click.directive';
import { ConfigNewQuizComponent } from './creation-modif-quiz/config-new-quiz/config-new-quiz.component';
import { NewOpenQuestionComponent } from './creation-modif-quiz/new-open-question/new-open-question.component';
import { NewQuestionRecapComponent } from './creation-modif-quiz/new-question-recap/new-question-recap.component';
import { NewQuizRecapComponent } from './creation-modif-quiz/new-quiz-recap/new-quiz-recap.component';
import { quizUploadComponent } from './creation-modif-quiz/quiz-upload/quiz-upload.component';
import { NewCloseQuestionComponent } from './creation-modif-quiz/new-close-question/new-close-question.component';
import { HomeScreenComponent } from './navigation/home-screen/home-screen.component';
import { ChooseHandicapComponent } from './account/choose-handicap/choose-handicap.component';
import { RegisterVisualSettingsComponent } from './account/register-visual-settings/register-visual-settings.component';
import { RegisterMotorSettingsComponent } from './account/register-motor-settings/register-motor-settings.component';
import { HeaderLogginComponent } from './side-bars/header-loggin/header-loggin.component';
import { NavigationBarLogginComponent } from './side-bars/navigation-bar-loggin/navigation-bar-loggin.component';
import { HomeBaseComponent } from './navigation/home-base/home-base.component';
import { ChooseQuizComponent } from './navigation/choose-quiz/choose-quiz.component';
import { ChooseThemeComponent } from './navigation/choose-theme/choose-theme.component';
import { AutoWidthDirective } from './directives/auto-width.directive';
import { ThemeService } from '../services/theme.service';
import { CarouselComponent } from './carousel/carousel.component';
import { initializeConfiguration } from './app.initializers';
import { UsersResolver } from '../resolvers/users.resolver';
import { AnswerDetailComponent } from './creation-modif-quiz/answer-detail/answer-detail.component';
import { SelectImageComponent } from './creation-modif-quiz/select-image/select-image.component';
import { EditQuizMainComponent } from './creation-modif-quiz/edit-quiz-main/edit-quiz-main.component';
import { ModifQuestionComponent } from './creation-modif-quiz/modif-question/modif-question.component';
import { DeleteQuizComponent } from './creation-modif-quiz/delete-quiz/delete-quiz.component';
import { ModifDescriptionComponent } from './creation-modif-quiz/modif-description/modif-description.component';
import { ModifAnswerComponent } from './creation-modif-quiz/modif-answer/modif-answer.component';
import { NotCompletedFieldsDialogComponent } from './dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';
import { ExitUndefinedUserComponent } from './dialogs/exit-undefined-user/exit-undefined-user.component';
import { EmptyQuizAlertComponent } from './dialogs/empty-quiz-alert/empty-quiz-alert.component';
import { TooManyCaractereComponent } from './dialogs/too-many-caractere/too-many-caractere.component';
import { TooManyCaractereTitleComponent } from './dialogs/too-many-caractere-title/too-many-caractere-title.component';
import { EmptyAnswerComponent } from './dialogs/empty-answer/empty-answer.component';
import { NewQuestionComponent } from './creation-modif-quiz/new-question/new-question.component';
import { ModifCloseQuestionComponent } from './creation-modif-quiz/modif-close-question/modif-close-question.component';
import { ModifOpenQuestionComponent } from './creation-modif-quiz/modif-open-question/modif-open-question.component';
import { NoCheckAnswerComponent } from './dialogs/no-check-answer/no-check-answer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EditQuizComponent,
        QuestionComponent,
        QuestionFormComponent,
        QuestionListComponent,
        UserComponent,
        UserFormComponent,
        UserListComponent,
        NavigationBarComponent,
        QuestionPlayComponent,
        MainMenuComponent,
        VisualSettingsComponent,
        MotorSettingsComponent,
        AccountSettingsComponent,
        ExitQuizDialogComponent,
        EditQuizMenuComponent,
        NewQuizThemeComponent,
        SlowClickDirective,
        ConfigNewQuizComponent,
        NewQuestionComponent,
        NewOpenQuestionComponent,
        NewQuestionRecapComponent,
        NewQuizRecapComponent,
        quizUploadComponent,
        NewCloseQuestionComponent,
        HomeScreenComponent,
        ChooseHandicapComponent,
        RegisterVisualSettingsComponent,
        RegisterMotorSettingsComponent,
        HeaderLogginComponent,
        NavigationBarLogginComponent,
        HomeBaseComponent,
        ChooseQuizComponent,
        ChooseThemeComponent,
        AutoWidthDirective,
        CarouselComponent,
        AnswerDetailComponent,
        SelectImageComponent,
        EditQuizMainComponent,
        ModifQuestionComponent,
        DeleteQuizComponent,
        ModifCloseQuestionComponent,
        ModifDescriptionComponent,
        ModifOpenQuestionComponent,
        ModifAnswerComponent,
        NotCompletedFieldsDialogComponent,
        ExitUndefinedUserComponent,
        EmptyQuizAlertComponent,
        TooManyCaractereComponent,
        TooManyCaractereTitleComponent,
        EmptyAnswerComponent,
        NoCheckAnswerComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatSliderModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeConfiguration,
            deps: [ThemeService],
            multi: true,
        },
        UsersResolver,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
