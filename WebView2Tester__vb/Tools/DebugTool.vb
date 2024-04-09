Imports System.Diagnostics
Imports System.Windows.Forms

Namespace Tools
    Public NotInheritable Class DebugTool
        Private Sub New()
        End Sub


        ''' <summary>
        ''' 디버그 모드 여부
        ''' </summary>
        ''' <returns></returns>
        Public Shared ReadOnly Property IsDebugMode As Boolean
            Get
#If DEBUG Then
                Return True
#Else
            Return False
#End If
            End Get
        End Property


        Private Shared _frmMain As Form
        ''' <summary>
        ''' 메인 폼
        ''' </summary>
        ''' <returns></returns>
        Public Shared ReadOnly Property MainForm As Form
            Get
                If _frmMain Is Nothing Then
                    _frmMain = Application.OpenForms("MainForm")
                End If

                Return _frmMain
            End Get
        End Property


        Public Shared IsUseAlert As Boolean = False
        ''' <summary>
        ''' 메세지 출력
        ''' </summary>
        Public Shared Sub Alert(msg As String)
            If IsUseAlert Then
                MsgBox(msg)
                'AlertForm.Open(MainForm, msg)
            End If
        End Sub


        ''' <summary>
        ''' 로그 출력
        ''' </summary>
        Public Shared Sub Log(msg As String)
            Debug.WriteLine(msg)
        End Sub
    End Class
End Namespace
