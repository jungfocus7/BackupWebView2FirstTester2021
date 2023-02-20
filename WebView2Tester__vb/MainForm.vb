Imports System
Imports System.Drawing
Imports System.IO
Imports System.Windows.Forms
Imports Microsoft.Web.WebView2.Core
Imports Microsoft.Web.WebView2.WinForms






Public NotInheritable Class MainForm
    ''' <summary>
    ''' 
    ''' </summary>
    Public Sub New()
        ' 디자이너에서 이 호출이 필요합니다.
        InitializeComponent()

        ' InitializeComponent() 호출 뒤에 초기화 코드를 추가하세요.

    End Sub


    ''' <summary>
    ''' 
    ''' </summary>
    ''' <param name="tea"></param>
    Protected Overrides Sub OnLoad(tea As EventArgs)
        MyBase.OnLoad(tea)

        Text = [GetType]().Namespace
        MinimumSize = Size

        '모니터다 듀얼 이상일때
        Dim tcs As Screen = Screen.FromPoint(Cursor.Position)
        Dim tsb As Rectangle = tcs.WorkingArea
        Dim tlp As Point = New Point(tsb.Right, tsb.Bottom)
        Dim tws As Size = Size
        tlp.Offset(-(tws.Width + 10), -(tws.Height + 10))
        Location = tlp


        _cdp = Environment.GetCommandLineArgs()(0)
        _cdp = Path.GetDirectoryName(_cdp)


        _wb2 = WebView21
        prWebView2EnsureCoreWebView2Async()
        AddHandler _wb2.CoreWebView2InitializationCompleted, AddressOf pf_CoreWebView2InitializationCompleted


        Dim htmlPath As String = Environment.GetCommandLineArgs()(0)
        htmlPath = Path.Combine(Path.GetDirectoryName(htmlPath), "HtmlRoot")

        Dim htmlRootFile As String = Path.Combine(htmlPath, "Root.html")
        If File.Exists(htmlRootFile) Then
            _wb2.Source = New Uri(htmlRootFile)
        End If


        'Dim htmlPath As String = Environment.GetCommandLineArgs()(0)
        'htmlPath = Path.Combine(Path.GetDirectoryName(htmlPath), "..\##___HtmlUiTester")

        'Dim htmlRootFile As String = Path.Combine(htmlPath, "TstRol5.html")
        'If File.Exists(htmlRootFile) Then
        '    _wb2.Source = New Uri(htmlRootFile)
        'End If

    End Sub


    Private Async Sub prWebView2EnsureCoreWebView2Async()
        Dim cweo As New CoreWebView2EnvironmentOptions("--disable-web-security")
        Dim env As CoreWebView2Environment = Await CoreWebView2Environment.CreateAsync(Nothing, Nothing, cweo)
        Await _wb2.EnsureCoreWebView2Async(env)
    End Sub




    ''' <summary>
    ''' CurrentDirectoryPath
    ''' </summary>
    Private _cdp As String

    ''' <summary>
    ''' 
    ''' </summary>
    Private _wb2 As WebView2

    ''' <summary>
    ''' 
    ''' </summary>
    Private _cwb2 As CoreWebView2


    ''' <summary>
    ''' 
    ''' </summary>
    ''' <param name="tsd"></param>
    ''' <param name="tea"></param>
    Private Sub pf_CoreWebView2InitializationCompleted(tsd As Object, tea As CoreWebView2InitializationCompletedEventArgs)
        If tea.IsSuccess Then
            _cwb2 = _wb2.CoreWebView2
            '_cwb2.Settings.IsPinchZoomEnabled = False
            AddHandler _cwb2.ContextMenuRequested, AddressOf pf_ContextMenuRequested

            If RuntimeHelper.IsDebugMode Then
                _cwb2.OpenDevToolsWindow()
            End If

            AddHandler _wb2.WebMessageReceived, AddressOf pf_WebMessageReceived

        Else
        End If

    End Sub


    ''' <summary>
    ''' 
    ''' </summary>
    ''' <param name="tsd"></param>
    ''' <param name="tea"></param>
    Private Sub pf_ContextMenuRequested(tsd As Object, tea As CoreWebView2ContextMenuRequestedEventArgs)
        tea.Handled = True

    End Sub


    Private Sub pf_WebMessageReceived(tsd As Object, tea As CoreWebView2WebMessageReceivedEventArgs)
        Dim tmsg As String = tea.TryGetWebMessageAsString()
        'MsgBox(tmsg)

        Dim tmda() As String = tmsg.Split(";"c)

        Select Case tmda(0)
            Case "LoadSubContent"
                pf_LoadSubContent(tmda(1))

        End Select

        '_cwb2.ExecuteScriptAsync("alert('xxxx');")

    End Sub


    Private Sub pf_LoadSubContent(tfnm As String)
        Dim tfp As String = Path.Combine(_cdp & "\HtmlRoot", tfnm)
        If File.Exists(tfp) Then
            Dim tta As String = File.ReadAllText(tfp)
            'MsgBox(tta)
            Dim tcfs As String = $"__fn_loadSub(`" & tta & "`);"
            'MsgBox(tcfs)
            _cwb2.ExecuteScriptAsync(tcfs)
            '_cwb2.ExecuteScriptAsync("alert('xxxxxxxx');")

        End If

    End Sub



End Class




Public NotInheritable Class RuntimeHelper
    Private Sub New()
    End Sub


    Public Shared ReadOnly Property IsDebugMode As Boolean
        Get
#If DEBUG Then
            Return True
#Else
            Return False
#End If
        End Get
    End Property




End Class



