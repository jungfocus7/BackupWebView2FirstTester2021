<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class AlertForm
    Inherits System.Windows.Forms.Form

    'Form은 Dispose를 재정의하여 구성 요소 목록을 정리합니다.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Windows Form 디자이너에 필요합니다.
    Private components As System.ComponentModel.IContainer

    '참고: 다음 프로시저는 Windows Form 디자이너에 필요합니다.
    '수정하려면 Windows Form 디자이너를 사용하십시오.  
    '코드 편집기에서는 수정하지 마세요.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me._txbMain = New System.Windows.Forms.TextBox()
        Me._btnNo = New System.Windows.Forms.Button()
        Me._btnYes = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        '_txbMain
        '
        Me._txbMain.Location = New System.Drawing.Point(12, 12)
        Me._txbMain.Multiline = True
        Me._txbMain.Name = "_txbMain"
        Me._txbMain.ReadOnly = True
        Me._txbMain.ScrollBars = System.Windows.Forms.ScrollBars.Both
        Me._txbMain.Size = New System.Drawing.Size(406, 217)
        Me._txbMain.TabIndex = 0
        Me._txbMain.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        Me._txbMain.WordWrap = False
        '
        '_btnNo
        '
        Me._btnNo.Cursor = System.Windows.Forms.Cursors.Hand
        Me._btnNo.Location = New System.Drawing.Point(343, 235)
        Me._btnNo.Name = "_btnNo"
        Me._btnNo.Size = New System.Drawing.Size(75, 23)
        Me._btnNo.TabIndex = 1
        Me._btnNo.Text = "취소"
        Me._btnNo.UseVisualStyleBackColor = True
        '
        '_btnYes
        '
        Me._btnYes.Cursor = System.Windows.Forms.Cursors.Hand
        Me._btnYes.Location = New System.Drawing.Point(262, 235)
        Me._btnYes.Name = "_btnYes"
        Me._btnYes.Size = New System.Drawing.Size(75, 23)
        Me._btnYes.TabIndex = 2
        Me._btnYes.Text = "확인"
        Me._btnYes.UseVisualStyleBackColor = True
        '
        'AlertForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(430, 270)
        Me.Controls.Add(Me._btnYes)
        Me.Controls.Add(Me._btnNo)
        Me.Controls.Add(Me._txbMain)
        Me.Font = New System.Drawing.Font("맑은 고딕", 9.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(129, Byte))
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle
        Me.Margin = New System.Windows.Forms.Padding(3, 4, 3, 4)
        Me.MaximizeBox = False
        Me.MinimizeBox = False
        Me.Name = "AlertForm"
        Me.ShowInTaskbar = False
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent
        Me.Text = "AlertForm"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents _txbMain As System.Windows.Forms.TextBox
    Friend WithEvents _btnNo As System.Windows.Forms.Button
    Friend WithEvents _btnYes As System.Windows.Forms.Button
End Class
