Imports System
Imports System.Diagnostics
Imports System.Drawing
Imports System.IO
Imports System.Windows.Forms
Imports Microsoft.Web.WebView2.Core
Imports Microsoft.Web.WebView2.WinForms
Imports WebView2Tester__vb.Extensions
Imports WebView2Tester__vb.Tools



Public NotInheritable Class MainForm
#Region "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1) 기본설정"
    ''' <summary>
    ''' 생성자
    ''' </summary>
    Public Sub New()
        ' 디자이너에서 이 호출이 필요합니다.
        InitializeComponent()

        ' InitializeComponent() 호출 뒤에 초기화 코드를 추가하세요.

    End Sub


    ''' <summary>
    ''' Load 이벤트
    ''' </summary>
    ''' <param name="ea"></param>
    Protected Overrides Sub OnLoad(ea As EventArgs)
        MyBase.OnLoad(ea)

        Text = MainProxy.GetVerInfo()
        MinimumSize = Size
        AlignBottomRight()
        ResizeRenderCancel()

        _cdp = Environment.GetCommandLineArgs()(0)
        _cdp = Path.GetDirectoryName(_cdp)

        _wb2 = WebView21
        _wb2.AllowExternalDrop = False
        prWebView2EnsureCoreWebView2Async()
        AddHandler _wb2.CoreWebView2InitializationCompleted, AddressOf prCoreWebView2InitializationCompleted

        _hdp = Path.Combine(_cdp, "..\HtmlRoot")
        Dim hrfp As String = Path.GetFullPath(Path.Combine(_hdp, "Root.html"))
        If File.Exists(hrfp) Then
            _wb2.Source = New Uri(hrfp)
            Text = MainProxy.GetVerInfo(hrfp)
        End If

        prFooterSetting()
        '        DebugTool.Alert("
        '개발자 인민군 개인 정보 오류
        '개발자 인민군 개인 정보 오류
        '개발자 인민군 개인 정보 오류
        '개발자 인민군 개인 정보 오류
        '        ".Trim())
    End Sub


    ''' <summary>
    ''' CurrentDirectoryPath
    ''' </summary>
    Private _cdp As String

    ''' <summary>
    ''' HtmlDirectoryPath
    ''' </summary>
    Private _hdp As String

    ''' <summary>
    ''' WebView2
    ''' </summary>
    Private _wb2 As WebView2

    ''' <summary>
    ''' CoreWebView2
    ''' </summary>
    Private _cwv2 As CoreWebView2



    ''' <summary>
    ''' EnvironmentOptions 설정
    ''' </summary>
    Private Async Sub prWebView2EnsureCoreWebView2Async()
        Dim cweo As New CoreWebView2EnvironmentOptions("--disable-web-security")
        Dim env As CoreWebView2Environment = Await CoreWebView2Environment.CreateAsync(Nothing, Nothing, cweo)

        Await _wb2.EnsureCoreWebView2Async(env)
    End Sub


    ''' <summary>
    ''' Completed 이벤트
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prCoreWebView2InitializationCompleted(sd As Object, ea As CoreWebView2InitializationCompletedEventArgs)
        If ea.IsSuccess Then
            _cwv2 = _wb2.CoreWebView2
            _cwv2.Settings.IsPinchZoomEnabled = False
            'If DebugTool.IsDebugMode Then
            '    _cwv2.OpenDevToolsWindow()
            'End If

            AddHandler _cwv2.ContextMenuRequested, AddressOf prContextMenuRequested
            AddHandler _wb2.WebMessageReceived, AddressOf prWebMessageReceived
        End If
    End Sub


    ''' <summary>
    ''' ContextMenuRequested
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prContextMenuRequested(sd As Object, ea As CoreWebView2ContextMenuRequestedEventArgs)
        ea.Handled = True
    End Sub


    Private _cms As ContextMenuStrip
    ''' <summary>
    ''' ???
    ''' </summary>
    Private Sub prFooterSetting()
        _cms = New ContextMenuStrip()
        Dim tsia() As ToolStripItem = {
            New ToolStripMenuItem("1) 폴더위치 열기", Nothing, AddressOf prCmsAllCall),
            New ToolStripMenuItem("2) VSCode 열기", Nothing, AddressOf prCmsAllCall),
            New ToolStripSeparator(),
            New ToolStripMenuItem("3) 개발자도구 열기", Nothing, AddressOf prCmsAllCall),
            New ToolStripMenuItem("4) 작업관리자 열기", Nothing, AddressOf prCmsAllCall),
            New ToolStripMenuItem("5) 새로 고침", Nothing, AddressOf prCmsAllCall),
            New ToolStripSeparator(),
            New ToolStripMenuItem("6) 이미지 캡처", Nothing, AddressOf prCmsAllCall),
            New ToolStripSeparator(),
            New ToolStripMenuItem("X) 닫어", Nothing, AddressOf prCmsAllCall)
        }
        _cms.Cursor = Cursors.Hand
        _cms.Items.AddRange(tsia)

        'AddHandler _btnFunc.Click, AddressOf prBtnFuncClick
        AddHandler _btnFunc.MouseDown, AddressOf prBtnFuncMouseDown

        _txbEnter.Clear()
        AddHandler _btnEnter.Click, AddressOf prBtnEnterClick
    End Sub


    ''' <summary>
    ''' ???
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prCmsAllCall(sd As Object, ea As EventArgs)
        Dim tsi As ToolStripItem = DirectCast(sd, ToolStripItem)
        If tsi.Text.StartsWith("1) ") Then
            Try
                Process.Start(_hdp)
            Catch
            End Try
        ElseIf tsi.Text.StartsWith("2) ") Then
            Try
                If Directory.Exists(_hdp) Then
                    Dim psi As New ProcessStartInfo() With {
                        .FileName = "code",
                        .WorkingDirectory = _hdp,
                        .Arguments = $"""{_hdp}""",
                        .UseShellExecute = True,
                        .CreateNoWindow = False,
                        .WindowStyle = ProcessWindowStyle.Hidden
                    }
                    Process.Start(psi)
                Else
                    Throw New Exception()
                End If
            Catch
                DebugTool.Log("실패")
            End Try
        ElseIf tsi.Text.StartsWith("3) ") Then
            Try
                _cwv2.OpenDevToolsWindow()
            Catch
            End Try
        ElseIf tsi.Text.StartsWith("4) ") Then
            Try
                _cwv2.OpenTaskManagerWindow()
            Catch
            End Try
        ElseIf tsi.Text.StartsWith("5) ") Then
            Try
                _cwv2.Reload()
            Catch
            End Try
        ElseIf tsi.Text.StartsWith("6) ") Then
            Try
                AlertForm.Open(Me, "준비중")
            Catch
            End Try
        ElseIf tsi.Text.StartsWith("X) ") Then
            Try
                _cms.Close()
            Catch
            End Try
        End If
    End Sub


    '''' <summary>
    '''' ???
    '''' </summary>
    '''' <param name="sender"></param>
    '''' <param name="e"></param>
    'Private Sub prBtnFuncClick(sender As Object, e As EventArgs)
    '    Dim gpt As Point = MousePosition
    '    Dim rct As Rectangle = _cms.DisplayRectangle
    '    Dim pt As New Point(gpt.X - rct.Width, gpt.Y - (rct.Height + 10))
    '    _cms.Show(pt, ToolStripDropDownDirection.Default)
    'End Sub


    ''' <summary>
    ''' ???
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prBtnFuncMouseDown(sd As Object, ea As MouseEventArgs)
        If ea.Button = MouseButtons.Right Then
            Dim gpt As Point = MousePosition
            Dim rct As Rectangle = _cms.DisplayRectangle
            Dim pt As New Point(gpt.X - rct.Width, gpt.Y - (rct.Height + 10))
            _cms.Show(pt, ToolStripDropDownDirection.Default)
        End If
    End Sub


    ''' <summary>
    ''' ???
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prBtnEnterClick(sd As Object, ea As EventArgs)
        Dim ips As String = _txbEnter.Text
        If Not String.IsNullOrWhiteSpace(ips) Then
            Dim url As String = ips
            _wb2.Source = New Uri(url)
            Text = MainProxy.GetVerInfo(url)
        End If
    End Sub
#End Region


#Region "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2) 쓰레기"
    ''' <summary>
    ''' WebMessageReceived
    ''' </summary>
    ''' <param name="sd"></param>
    ''' <param name="ea"></param>
    Private Sub prWebMessageReceived(sd As Object, ea As CoreWebView2WebMessageReceivedEventArgs)
        Dim msg As String = ea.TryGetWebMessageAsString()
        DebugTool.Alert(msg)

        Dim mda() As String = msg.Split(";"c)
        Select Case mda(0)
            Case "LoadSubContent"
                prLoadSubContent(mda(1))

        End Select

        '_cwb2.ExecuteScriptAsync("alert('xxxx');")
    End Sub



    ''' <summary>
    ''' LoadSubContent
    ''' </summary>
    ''' <param name="fnm"></param>
    Private Sub prLoadSubContent(fnm As String)
        Dim fp As String = Path.Combine(_cdp & "\HtmlRoot", fnm)
        If File.Exists(fp) Then
            Dim ags As String = File.ReadAllText(fp)
            DebugTool.Alert(ags)

            Dim cfs As String = $"__fn_loadSub(`" & ags & "`);"
            DebugTool.Alert(cfs)

            _cwv2.ExecuteScriptAsync(cfs)
            '_cwb2.ExecuteScriptAsync("alert('xxxxxxxx');")
        End If
    End Sub
#End Region
End Class






