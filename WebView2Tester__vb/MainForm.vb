Imports System
Imports System.IO
Imports Microsoft.Web.WebView2.Core
Imports Microsoft.Web.WebView2.WinForms






Public NotInheritable Class MainForm
    Public Sub New()
        ' 디자이너에서 이 호출이 필요합니다.
        InitializeComponent()

        ' InitializeComponent() 호출 뒤에 초기화 코드를 추가하세요.

    End Sub


    Protected Overrides Sub OnLoad(tea As EventArgs)
        MyBase.OnLoad(tea)

        Text = [GetType]().Namespace
        MinimumSize = Size


        _wb2 = WebView21

        AddHandler _wb2.CoreWebView2InitializationCompleted, AddressOf pf_CoreWebView2InitializationCompleted


        Dim htmlPath As String = Environment.GetCommandLineArgs()(0)
        htmlPath = Path.Combine(Path.GetDirectoryName(htmlPath), "HtmlRoot")

        Dim htmlRootFile As String = Path.Combine(htmlPath, "Root.html")
        If File.Exists(htmlRootFile) Then
            _wb2.Source = New Uri(htmlRootFile)
        End If



    End Sub



    Private _wb2 As WebView2

    Private _cwb2 As CoreWebView2


    Private Sub pf_CoreWebView2InitializationCompleted(tsd As Object, tea As CoreWebView2InitializationCompletedEventArgs)
        If tea.IsSuccess Then
            _cwb2 = _wb2.CoreWebView2
            AddHandler _cwb2.ContextMenuRequested, AddressOf pf_ContextMenuRequested
        Else
        End If

    End Sub


    Private Sub pf_ContextMenuRequested(tsd As Object, tea As CoreWebView2ContextMenuRequestedEventArgs)
        tea.Handled = True

    End Sub





End Class
