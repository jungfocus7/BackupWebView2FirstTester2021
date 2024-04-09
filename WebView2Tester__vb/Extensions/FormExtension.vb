Imports System
Imports System.Drawing
Imports System.Runtime.CompilerServices
Imports System.Windows.Forms



Namespace Extensions
    Public Module FormExtension
        ''' <summary>
        ''' 폼 우측하단으로 정렬하기
        ''' </summary>
        ''' <param name="frm"></param>
        <Extension()>
        Public Sub AlignBottomRight(frm As Form)
            '모니터가 듀얼 이상일때
            Dim tcs As Screen = Screen.FromPoint(Cursor.Position)
            Dim tsb As Rectangle = tcs.WorkingArea
            Dim tlp As Point = New Point(tsb.Right, tsb.Bottom)
            Dim tws As Size = frm.Size
            tlp.Offset(-(tws.Width + 10), -(tws.Height + 10))
            frm.Location = tlp
        End Sub


        ''' <summary>
        ''' ??
        ''' </summary>
        ''' <param name="frm"></param>
        <Extension()>
        Public Sub ResizeRenderCancel(frm As Form)
            AddHandler frm.ResizeBegin,
                Sub(sd As Object, ea As EventArgs)
                    frm.SuspendLayout()
                End Sub

            AddHandler frm.ResizeEnd,
                Sub(sd As Object, ea As EventArgs)
                    frm.ResumeLayout(True)
                End Sub
        End Sub
    End Module
End Namespace



